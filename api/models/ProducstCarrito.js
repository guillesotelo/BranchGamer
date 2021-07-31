const S = require("sequelize");
const db = require("../db");

class ProducstCarrito extends S.Model {
  add(num = 1) {
    return this.increment("quantity", { by: num });
  }

  remove(num = 1) {
    return this.decrement("quantity", { by: num });
  }
}

ProducstCarrito.init(
  {
    quantity: {
      type: S.INTEGER,
      defaultValue: 1,
    },
  },
  { sequelize: db }
);

module.exports = ProducstCarrito;