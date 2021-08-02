const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, email, id, gitHub) {
    super(name, email, id);
    this.gitHub = gitHub;
  }

  getSpecial() {
    return this.gitHub;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
