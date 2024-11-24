import Ajv from "ajv";
import addFormats from "ajv-formats";

const ajv = new Ajv({
	allErrors: true,
	strict: "log",
	verbose: true,
});

addFormats(ajv);

export const validateSchema = (schema, response) => {
	const validate = ajv.compile(schema);
	const valid = validate(response);

	if (valid) {
		cy.log("Schema validated successfully.");
	} else {
		const errors = validate.errors;
		console.error("Schema validation errors:", errors);
		const buildIssues = errors.map(({ schemaPath, params, message }) => ({
			schemaPath,
			params,
			message,
		}));

		throw new Error(`Schema validation failed: ${JSON.stringify(buildIssues, null, 2)}`);
	}
};
