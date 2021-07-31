const Sequelize = require("sequelize");

const db = new Sequelize(
  "postgres://postgres:postgres@localhost:5432/branch_and_gamer",
  {
    logging: false,
  }
);

module.exports = db;
