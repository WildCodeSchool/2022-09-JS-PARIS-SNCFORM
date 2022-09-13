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
      password,
      genre,
      avatar,
      grade,
      jobType,
      manager,
    } = user;
    return this.connection.query(
      `insert into ${this.table} (first_name,last_name,email,cp_number,password,role,genre,avatar,grade_id,job_type_id,manager_id) values (?,?,?,?,?,?,?,?,?,?,?)`,
      [
        firstName,
        lastName,
        email,
        cpNumber,
        password,
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
    return this.connection.query(`select * from  ${this.table}`);
  }

  delete(id) {
    return this.connection.query(`delete from ${this.table} where id = ?`, [
      id,
    ]);
  }

  find(id) {
    return this.connection.query(`select * from  ${this.table} where id = ?`, [
      id,
    ]);
  }

  update(user) {
    const { email, password, avatar, manager, id } = user;
    return this.connection.query(
      `update ${this.table} set email = ?, password = ?, avatar = ? , manager_id = ? where id = ?`,
      [email, password, avatar, manager, id]
    );
  }
}

module.exports = UserManager;
