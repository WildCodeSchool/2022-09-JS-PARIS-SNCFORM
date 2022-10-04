const AbstractManager = require("./AbstractManager");

class UserLearningManager extends AbstractManager {
  constructor() {
    super({ table: "user_learning" });
  }

  insert(userId, learningId) {
    return this.connection.query(
      `insert into ${this.table} (user_id, learning_id, status) values (?,?,?)`,
      [userId, learningId, "registered"]
    );
  }
}

module.exports = UserLearningManager;
