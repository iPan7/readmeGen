const inquirer = require("inquirer");
const fs = require("fs");

const initGitQuestions = [
  {
    type: "input",
    message: "What is your GitHub user name?",
    name: "gitHubName",
  },
  { type: "input", message: "What is your GitHub email?", name: "email" },
];

const questions = [
  {
    type: "input",
    message: "What is the name of your project?",
    name: "repoName",
  },
  {
    type: "input",
    message: "Please enter a description of your project.",
    name: "description",
  },
  {
    type: "input",
    message: "Please enter your Table of Contents.",
    name: "tableContents",
  },
  {
    type: "input",
    message: "What are the steps required to install your project?",
    name: "installApp",
  },
  {
    type: "input",
    message: "Provide instructions for use of your project.",
    name: "appInstructions",
  },
  {
    type: "input",
    message: "What license would you like to use?",
    name: "license",
  },
  {
    type: "input",
    message:
      "Please enter GitHub user names of contributors if there are any (If there are mulitple contributors, seperate names with a comma and no space. If none, write 'none'.)",
    name: "contributors",
  },
  {
    type: "input",
    message: "Provide examples on how to run tests.",
    name: "tests",
  },
  { type: "input", message: "Any questions?", name: "questions" },
];

function writeToFile(fileName, data) {}

function init() {
  inquirer.prompt(questions).then((response) => {
    // this will Create the first line and main header for the repo (that is what the "# " is for) using the users resonse to RepoName
    fs.appendFileSync("README.md", "# " + response.repoName + "\n", function (
      err
    ) {
      if (err) {
        console.log(err);
      } else {
        console.log("Success");
      }
    });
    // this will create the 2nd line of readme discribing the application was developed by the users reponse to githubname
    fs.appendFileSync(
      "README.md",
      "This application was developed by: " + response.gitHubName + "\n" + "\n",
      function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("Success");
        }
      }
    );
    // adds the discription of the project that the users entered
    fs.appendFileSync("README.md", response.description + "\n", function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("Success");
      }
    });
    //creates a sub header for installation and adds the instructions the users entered
    fs.appendFileSync(
      "README.md",
      "## Installation" + "\n" + response.installApp + "\n",
      function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("Success");
        }
      }
    );
    // creates a sub header for App usage and adds the instructions the users entered
    fs.appendFileSync(
      "README.md",
      "## How to use the Application" + "\n" + response.appInstructions + "\n",
      function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("Success");
        }
      }
    );
    // creates a sub header for issue reporting and contriubiting and adds the instructions the users entered
    fs.appendFileSync(
      "README.md",
      "## Issue Reporting and Contributing" +
        "\n" +
        response.appIssuesAndCont +
        "\n",
      function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("Success");
        }
      }
    );
    // creates a sub header for issue reporting and contriubiting and adds the instructions the users entered
    fs.appendFileSync(
      "README.md",
      "## Other Contibuting Developers:" + "\n" + response.contributors + "\n",
      function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("Success");
        }
      }
    );
    // creates a sub header for licences and adds the licences the users entered
    fs.appendFileSync(
      "README.md",
      "## Licence(s)" + "\n" + response.license + "\n",
      function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("Success");
        }
      }
    );
  });
}

init();