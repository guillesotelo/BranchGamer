const S = require("sequelize");
const db = require("../db");

class Carrito extends S.Model {}

Carrito.init(
  {
    state: {
      type: S.ENUM({
        values: ["pendiente", "confirmado", "rechazado", "inUse"],
      }),
      defaultValue: "inUse",
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "carritos" }
);

module.exports = Carrito;
