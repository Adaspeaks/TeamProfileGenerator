const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const mainMenu = require("./src/mainMenu");
const managerQuestions = require("./src/managerQuestions");
const engineerQuestions = require("./src/engineerQuestions");
const internQuestions = require("./src/internQuestions");
const starterHTML = require("./src/starterHTML");

buildHTML = () => {
  inquirer.prompt(mainMenu).then(function (data) {
    if (data.role == "MANAGER") {
      inquirer.prompt(managerQuestions).then((role) => {
        const newManager = new Manager(
          data.name,
          data.id,
          data.email,
          role.officeNumber
        );
        let extra = "Office Number: ";
        if (role.reset) {
          fs.appendFile(
            "./dist/index.html",
            cardCreate(newManager, extra),
            (err) => {}
          );
          buildHTML();
        } else {
          fs.appendFile(
            "./dist/index.html",
            cardCreate(newManager, extra, closerHTML),
            (err) => {}
          );
        }
      });
    } else if (data.role == "ENGINEER") {
      inquirer.prompt(engineerQuestions).then((role) => {
        const newEngineer = new Engineer(
          data.name,
          data.id,
          data.email,
          role.username
        );
        let extra = "GitHub Username: ";
        if (role.reset) {
          fs.appendFile(
            "./dist/index.html",
            cardCreate(newEngineer, extra),
            (err) => {}
          );
          buildHTML();
        } else {
          fs.appendFile(
            "./dist/index.html",
            cardCreate(newEngineer, extra, closerHTML),
            (err) => {}
          );
        }
      });
    } else {
      inquirer.prompt(internQuestions).then((role) => {
        const newIntern = new Intern(
          data.name,
          data.id,
          data.email,
          role.school
        );
        let extra = "School: ";
        if (role.reset) {
          fs.appendFile(
            "./dist/index.html",
            cardCreate(newIntern, extra),
            (err) => {}
          );
          buildHTML();
        } else {
          fs.appendFile(
            "./dist/index.html",
            cardCreate(newIntern, extra, closerHTML),
            (err) => {}
          );
        }
      });
    }
  });
};

init = () => {
  fs.writeFile("./dist/index.html", starterHTML, (err) => {});
  buildHTML(inquirer);
};

init();
