const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generateProfile = require("./src/page-template");
const writeFile = require("./utils/generate-site");
let profileData = {};

// begin user prompt for manager info
const promptManager = () => {
  // if there is no employee array create one
  if (!profileData.employees) {
    profileData.employees = [];
  }

  console.log(`
    =======================
    Team Profile Generator!
    =======================
    `);
  return (
    inquirer
      .prompt([
        {
          type: "text",
          name: "name",
          message: "Please enter the team manager's name.",
        },
        {
          type: "text",
          name: "id",
          message: "Please enter the team manager's employee id number.",
        },
        {
          type: "text",
          name: "email",
          message: "Please enter the team manager's email address.",
        },
        {
          type: "text",
          name: "officeNumber",
          message: "Please enter the team manager's office number",
        },
      ])
      // destructure info from prompt
      .then(({ name, id, email, officeNumber }) => {
        const manager = new Manager(name, id, email, officeNumber);

        profileData.employees.push(manager);
      })
  );
};

// Run prompt to see if the user wants to add an engineer/intern or finish the profile
function promptNextOrFinish() {
  return inquirer
    .prompt({
      type: "list",
      name: "nextOrFinish",
      message:
        "Would you like to enter an engineer or intern? Or finish the profile?",
      choices: ["Engineer", "Intern", "Finish Profile"],
    })
    .then((answer) => {
      if (answer.nextOrFinish === "Engineer") {
        return promptEngineer();
      } else if (answer.nextOrFinish === "Intern") {
        return promptIntern();
      } else {
        return profileData;
      }
    });
}

// question prompts for engineer
function promptEngineer() {
  return inquirer
    .prompt([
      {
        type: "text",
        name: "name",
        message: "Please enter the engineer's name.",
      },
      {
        type: "text",
        name: "id",
        message: "Please enter the engineer's employee id number.",
      },
      {
        type: "text",
        name: "email",
        message: "Please enter the engineer's email address.",
      },
      {
        type: "text",
        name: "github",
        message: "Please enter the engineer's github account.",
      },
    ])
    .then(({ name, id, email, github }) => {
      const engineer = new Engineer(name, id, email, github);
      profileData.employees.push(engineer);

      return promptNextOrFinish();
    });
}

// question prompts for intern
function promptIntern() {
  return inquirer
    .prompt([
      {
        type: "text",
        name: "name",
        message: "Please enter the intern's name.",
      },
      {
        type: "text",
        name: "id",
        message: "Please enter the intern's employee id number.",
      },
      {
        type: "text",
        name: "email",
        message: "Please enter the intern's email address.",
      },
      {
        type: "text",
        name: "school",
        message: "Please enter the intern's school.",
      },
    ])
    .then(({ name, id, email, school }) => {
      const intern = new Intern(name, id, email, school);

      profileData.employees.push(intern);
      return promptNextOrFinish();
    });
}

// start program
promptManager()
  .then(promptNextOrFinish)
  .then((profileData) => {
    return generateProfile(JSON.stringify(profileData));
  })
  .then((pageHTML) => {
    return writeFile(pageHTML);
  })
  .then((writeFileResponse) => {
    console.log(writeFileResponse);
  })
  .catch((err) => {
    console.log(err);
  });
