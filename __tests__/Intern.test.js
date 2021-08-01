const Intern = require("../lib/intern.js");

describe("intern", () => {
  it("should have a name", () => {
    const newIntern = new Intern(
      "Place Holder",
      101,
      "placeholder@email.com",
      "Beauchamp Champs"
    );
    expect(newIntern.name).toBe("Place Holder");
  });
  it("should have an Id", () => {
    const newIntern = new Intern(
      "Place Holder",
      101,
      "placeholder@email.com",
      "Beauchamp Champs"
    );
    expect(newIntern.id).toBe(101);
  });
  it("should have an email address", () => {
    const newIntern = new Intern(
      "Place Holder",
      101,
      "placeholder@email.com",
      "Beauchamp Champs"
    );
    expect(newIntern.email).toBe("placeholder@email.com");
  });
  it("should have a school name", () => {
    const newIntern = new Intern(
      "Place Holder",
      101,
      "placeholder@email.com",
      "Beauchamp Champs"
    );
    expect(newIntern.school).toBe("Beauchamp Champs");
  });
});
