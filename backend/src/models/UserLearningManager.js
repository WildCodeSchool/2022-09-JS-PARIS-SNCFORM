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

  update(status, startLearning, userLearningId) {
    return this.connection.query(
      `
      update ${this.table} set status = ?, start_learning = ? where id = ?
    `,
      [status, startLearning, userLearningId]
    );
  }
}

module.exports = UserLearningManager;
