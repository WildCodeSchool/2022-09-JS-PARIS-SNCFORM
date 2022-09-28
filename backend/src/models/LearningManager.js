const AbstractManager = require("./AbstractManager");

class LearningManager extends AbstractManager {
  constructor() {
    super({ table: "learning" });
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
}

module.exports = LearningManager;
