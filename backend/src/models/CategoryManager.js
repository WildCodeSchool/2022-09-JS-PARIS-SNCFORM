const AbstractManager = require("./AbstractManager");

class CategoryManager extends AbstractManager {
  constructor() {
    super({ table: "category" });
  }

  findByjob(jobId) {
    return this.connection.query(
      `
      select * from ${this.table}
      inner join job_type_category on job_type_category.category_id = ${this.table}.id
      where job_type_category.job_type_id = ?
      `,
      [jobId]
    );
  }
}

module.exports = CategoryManager;
