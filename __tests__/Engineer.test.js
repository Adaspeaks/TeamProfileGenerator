const Engineer = require("../lib/engineer");

// name id email
describe("Engineer", () => {
  it("should have a name", () => {
    const newEngineer = new Engineer(
      "Place Holder",
      101,
      "placeholder@email.com",
      "placeholder"
    );
    expect(newEngineer.name).toBe("Place Holder");
  });
  it("should have an id", () => {
    const newEngineer = new Engineer(
      "Place Holder",
      101,
      "placeholder@email.com",
      "placeholder"
    );
    expect(newEngineer.id).toBe(101);
  });

  it("should have an email address", () => {
    const newEngineer = new Engineer(
      "Place Holder",
      101,
      "placeholder@email.com",
      "placeholder"
    );
    expect(newEngineer.email).toBe("placeholder@email.com");
  });

  it("should have an github username", () => {
    const newEngineer = new Engineer(
      "Place Holder",
      101,
      "placeholder@email.com",
      "placeholder"
    );
    expect(newEngineer.gitHub).toBe("placeholder");
  });
});
