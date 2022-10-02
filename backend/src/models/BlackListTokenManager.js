const AbstractManager = require("./AbstractManager");

class BlackListTokenManager extends AbstractManager {
  constructor() {
    super({ table: "token_blacklist" });
  }

  insert(token) {
    return this.connection.query(
      `insert into ${this.table} (token) values (?)`,
      [token]
    );
  }

  findByToken(token) {
    return this.connection.query(`select * from ${this.table} where token =?`, [
      token,
    ]);
  }
}

module.exports = BlackListTokenManager;
