const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    // override to return Engineer
    this.role = "Engineer";
    return this.role;
  }
}

module.exports = Engineer;
