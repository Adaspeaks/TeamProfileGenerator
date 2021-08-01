const Manager = require("../lib/manager.js");

describe("manager", () => {
  it("should have a name", () => {
    const newManager = new Manager(
      "Place Holder",
      101,
      "placeholder@email.com",
      "Beauchamp Champs"
    );
    expect(newManager.name).toBe("Place Holder");
  });
  it("should have an Id", () => {
    const newManager = new Manager(
      "Place Holder",
      101,
      "placeholder@email.com",
      "Beauchamp Champs"
    );
    expect(newManager.id).toBe(101);
  });
  it("should have an email Address", () => {
    const newManager = new Manager(
      "Place Holder",
      101,
      "placeholder@email.com",
      "Beauchamp Champs"
    );
    expect(newManager.email).toBe("placeholder@email.com");
  });
  it("should have an office number", () => {
    const newManager = new Manager(
      "Place Holder",
      101,
      "placeholder@email.com",
      1010
    );
    expect(newManager.officeNumber).toBe(1010);
  });
});
