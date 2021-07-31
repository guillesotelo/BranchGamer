const S = require("sequelize");
const db = require("../db");

class Valoration extends S.Model {}

Valoration.init(
  {
    value: {
      type: S.INTEGER,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "valorations" }
);

module.exports = Valoration;
