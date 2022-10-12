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

  findByIdAndUserId(id, userId) {
    return this.connection.query(
      `select ${this.table}.*, status, start_learning, user_learning.id as user_learning_id from ${this.table} 
      inner join user_learning on ${this.table}.id = user_learning.learning_id  
      where ${this.table}.id = ? and user_learning.user_id = ?`,
      [id, userId]
    );
  }

  findByCatAndUserGrade(categoryId, userGrade, userId) {
    return this.connection.query(
      `
      select ${this.table}.* from  ${this.table} 
      inner join learning_category on ${this.table}.id = learning_category.learning_id
      inner join learning_grade on ${this.table}.id = learning_grade.learning_id
      where ${this.table}.id not in (select learning_id from user_learning where user_id = ? )  and learning_category.category_id = ? and learning_grade.grade_id = ? 
      `,
      [userId, categoryId, userGrade]
    );
  }

  findUserLearnings(userId) {
    return this.connection.query(
      `
      select status, ${this.table}.title, ${this.table}.id, learning_category.category_id as category_id
      from user
      inner join user_learning  on user.id = user_learning.user_id
      inner join ${this.table} on user_learning.learning_id = ${this.table}.id
      inner join learning_category on learning_category.learning_id = ${this.table}.id
      where user.id = ?
      `,
      [userId]
    );
  }

  findByJobAndGrade(jobId, gradeId) {
    return this.connection.query(
      `
      select ${this.table}.*, learning_category.category_id as category_id from ${this.table}
      inner join job_type_learning on job_type_learning.learning_id = ${this.table}.id
      inner join learning_grade on learning_grade.learning_id = ${this.table}.id
      inner join learning_category on learning_category.learning_id = ${this.table}.id
      where job_type_learning.job_type_id = ? and learning_grade.grade_id = ?
      `,
      [jobId, gradeId]
    );
  }
}

module.exports = LearningManager;
