export const userSchema = {
	type: "array",
	items: {
		type: "object",
		properties: {
			id: { type: "string" },
			name: {
				type: "object",
				properties: {
					first: { type: "string" },
					last: { type: "string" },
				},
				required: ["first", "last"],
				additionalProperties: false,
			},
			age: { type: "integer" },
			email: { type: "string", format: "email" },
			address: {
				type: "object",
				properties: {
					street: { type: "string" },
					city: { type: "string" },
					state: { type: "string" },
					zip: { type: "string" },
				},
				required: ["street", "city", "zip"],
				additionalProperties: false,
			},
			phone: {
				type: "object",
				properties: {
					home: { type: "string" },
					mobile: { type: "string" },
				},
				required: ["mobile"],
				additionalProperties: false,
			},
			company: {
				type: "object",
				properties: {
					name: { type: "string" },
					position: { type: "string" },
				},
				required: ["name"],
				additionalProperties: false,
			},
			hobbies: {
				type: "array",
				items: { type: "string" },
			},
			countryCode: { type: "string", maxLength: 2 },
		},
		required: ["id", "name", "age", "email", "address", "phone", "countryCode"],
		additionalProperties: false,
	},
};
