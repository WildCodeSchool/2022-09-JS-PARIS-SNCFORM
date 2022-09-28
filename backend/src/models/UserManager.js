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
      `select id, first_name,last_name,email,cp_number, role,genre,avatar,grade_id,job_type_id,manager_id from  ${this.table} where id = ?`,
      [id]
    );
  }

  update(user) {
    const { email, password, avatar, manager, id } = user;
    return this.connection.query(
      `update ${this.table} set email = ?, password = ?, avatar = ? , manager_id = ? where id = ?`,
      [email, password, avatar, manager, id]
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

  findUserLearningByStatus(userId, status) {
    return this.connection.query(
      `select status, learning.title
      from ${this.table}
      inner join user_learning 
      on ${this.table}.id = user_learning.user_id
      inner join learning
      on user_learning.learning_id = learning.id
      where user.id = ? and status = ?
      `,
      [userId, status]
    );
  }
}

module.exports = UserManager;
