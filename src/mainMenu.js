const Choice = require("inquirer/lib/objects/choice");

mainMenu = [
  {
    type: "input",
    name: "name",
    message: "Enter the team members name...",
  },
  {
    type: "list",
    name: "role",
    message: "The empolyee's role?",
    choices: ["MANAGER", "ENGINEER", "INTERN"],
  },
  {
    type: "input",
    name: "email",
    message: "Their Email address?",
  },
  {
    type: "input",
    name: "id",
    message: "Their id number?",
  },
];

module.exports = mainMenu;
