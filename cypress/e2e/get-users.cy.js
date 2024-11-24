import { validateSchema } from "../support/schema-validation";
import { userSchema } from "../support/schemas/get-users-schema";

describe("GET users", () => {
	it("validates the users schema", () => {
		cy.api({ url: "/api/users", method: "GET" }).then(({ body }) => {
			expect(body).to.be.an("array");
			body.forEach((user) => {
				expect(user.id).to.be.a("string");
				expect(user.name).to.be.an("object");
				expect(user.name).to.have.all.keys("first", "last");
				expect(user.name.first).to.be.a("string");
				expect(user.name.last).to.be.a("string");
				expect(user.age).to.be.a("number");
				expect(user.email).to.be.a("string");
				expect(user.email).to.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
				expect(user.address).to.be.an("object");
				expect(user.address).to.have.all.keys("street", "city", "state", "zip");
				expect(user.address.street).to.be.a("string");
				expect(user.address.city).to.be.a("string");
				expect(user.address.state).to.be.a("string");
				expect(user.address.zip).to.be.a("string");
				expect(user.phone).to.be.an("object");
				expect(user.phone).to.have.all.keys("home", "mobile");
				expect(user.phone.home).to.be.a("string");
				expect(user.phone.mobile).to.be.a("string");
				expect(user.company).to.be.an("object");
				expect(user.company).to.have.all.keys("name", "position");
				expect(user.company.name).to.be.a("string");
				expect(user.company.position).to.be.a("string");
				expect(user.hobbies).to.be.an("array");
				user.hobbies.forEach((hobby) => {
					expect(hobby).to.be.a("string");
				});
				expect(user.countryCode).to.be.a("string");
				expect(user.countryCode).to.have.lengthOf(2);
			});
		});
	});

	it("validates the users schema using AJV", () => {
		cy.api({ url: "/api/users", method: "GET" }).then(({ body }) =>
			validateSchema(userSchema, body)
		);
	});
});
