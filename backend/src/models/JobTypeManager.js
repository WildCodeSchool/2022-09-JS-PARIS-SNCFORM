const AbstractManager = require("./AbstractManager");

class JobTypeManager extends AbstractManager {
  constructor() {
    super({ table: "job_type" });
  }

  insert(jobType) {
    return this.connection.query(
      `insert into ${this.table} (name) values (?)`,
      [jobType.name]
    );
  }

  update(jobType) {
    const { name, id } = jobType;

    return this.connection.query(
      `update ${this.table} set name = ? where id = ?`,
      [name, id]
    );
  }
}

module.exports = JobTypeManager;
