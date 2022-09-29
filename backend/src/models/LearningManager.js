const AbstractManager = require("./AbstractManager");

class LearningManager extends AbstractManager {
  constructor() {
    super({ table: "learning" });
  }

  find(id) {
    return this.connection.query(`select * from  ${this.table} where id = ?`, [
      id,
    ]);
  }

  findByCatAndUserGrade(categoryId, userGrade) {
    return this.connection.query(
      `select ${this.table}.* from  ${this.table} 
      inner join learning_category 
      on ${this.table}.id = learning_category.learning_id
    
      inner join learning_grade
      on ${this.table}.id = learning_grade.learning_id
      where learning_category.category_id = ? and learning_grade.grade_id = ? 
     ;
      `,
      [categoryId, userGrade]
    );
  }

  findUserLearnings(userId) {
    return this.connection.query(
      `select status, ${this.table}.title, ${this.table}.id
      from user
      inner join user_learning 
      on user.id = user_learning.user_id
      inner join ${this.table}
      on user_learning.learning_id = ${this.table}.id
      where user.id = ?
      `,
      [userId]
    );
  }
}

module.exports = LearningManager;
