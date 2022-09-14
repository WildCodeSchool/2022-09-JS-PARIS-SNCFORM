const AbstractManager = require("./AbstractManager");

class GradeManager extends AbstractManager {
  constructor() {
    super({ table: "grade" });
  }
}

module.exports = GradeManager;
