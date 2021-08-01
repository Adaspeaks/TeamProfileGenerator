const Employee = require("../lib/employee");

// name id email
describe("Employee", () => {
  it("should have a name", () => {
    const newEmployee = new Employee(
      "Place Holder",
      101,
      "placeholder@email.com"
    );
    expect(newEmployee.name).toBe("Place Holder");
  });
  it("should have an id", () => {
    const newEmployee = new Employee(
      "Place Holder",
      101,
      "placeholder@email.com"
    );
    expect(newEmployee.id).toBe(101);
  });

  it("should have an email address", () => {
    const newEmployee = new Employee(
      "Place Holder",
      101,
      "placeholder@email.com"
    );
    expect(newEmployee.email).toBe("placeholder@email.com");
  });
});
