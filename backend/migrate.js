require("dotenv").config();

const fs = require("fs");
const mysql = require("mysql2/promise");

const migrate = async () => {
  // const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

  const connection = await mysql.createConnection({
    host: "eu-cdbr-west-03.cleardb.net",
    user: "b95a798acd9301",
    password: "25bc2018",
    multipleStatements: true,
  });

  await connection.query(`drop database if exists $heroku_f8354945b5d2202`);
  await connection.query(`create database $heroku_f8354945b5d2202`);
  await connection.query(`use $heroku_f8354945b5d2202`);

  const sql = fs.readFileSync("./database.sql", "utf8");

  await connection.query(sql);

  connection.end();
};

try {
  migrate();
} catch (err) {
  console.error(err);
}
