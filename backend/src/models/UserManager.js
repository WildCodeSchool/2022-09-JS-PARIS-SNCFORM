const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    const {
      firstName,
      lastName,
      email,
      cpNumber,
      hashedPassword,
      genre,
      avatar,
      grade,
      jobType,
      manager,
    } = user;
    return this.connection.query(
      `insert into ${this.table} (first_name,last_name,email,cp_number,hashedPassword,role,genre,avatar,grade_id,job_type_id,manager_id) values (?,?,?,?,?,?,?,?,?,?,?)`,
      [
        firstName,
        lastName,
        email,
        cpNumber,
        hashedPassword,
        "agent",
        genre,
        avatar || null,
        grade,
        jobType,
        manager,
      ]
    );
  }

  findAll() {
    return this.connection.query(
      `select id, first_name,last_name,email,cp_number, role,genre,avatar,grade_id,job_type_id,manager_id from  ${this.table}`
    );
  }

  find(id) {
    return this.connection.query(
      `select ${this.table}.*,job_type.name as job_type_name , manager.last_name as manager_last_name from  ${this.table} 
      inner join job_type 
      on ${this.table}.job_type_id = job_type.id
      inner join ${this.table} as manager
      on ${this.table}.manager_id = manager.id
      where ${this.table}.id = ?`,
      [id]
    );
  }

  update(user) {
    const { firstName, lastName, email, hashedPassword, id } = user;
    return this.connection.query(
      `update ${this.table} set first_name = ?, last_name = ?, email = ?, hashedPassword = ? where id = ?`,
      [firstName, lastName, email, hashedPassword, id]
    );
  }

  findByRole(role) {
    return this.connection.query(
      `select id, first_name,last_name,email,cp_number, role,genre,avatar,grade_id,job_type_id,manager_id from  ${this.table} where role = ?`,
      [role]
    );
  }

  findByCp(cpNumber) {
    return this.connection.query(
      `select * from  ${this.table} where cp_number = ?`,
      [cpNumber]
    );
  }
}

module.exports = UserManager;
