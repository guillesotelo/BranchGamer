const S = require("sequelize");
const db = require("../db");

class Product extends S.Model {
  // PROBAR METHODS WHIT SEQUELIZE MAKE SURE THEY INCREMENT/DECREMENT IN THE DB
  add(num) {
    return this.increment("quantity", { by: num });
  }

  remove(num) {
    return this.decrement("quantity", { by: num });
  }
}

Product.init(
  {
    title: {
      type: S.STRING,
      allowNull: false,
    },
    marca: {
      type: S.STRING,
      defaultValue: "",
    },
    price: {
      type: S.INTEGER,
      allowNull: false,
    },
    imageUrl: {
      type: S.TEXT,
      defaultValue:
        "https://i.ibb.co/hRWHZ1b/Captura-de-Pantalla-2021-07-01-a-la-s-00-47-33.png",
    },
    description: {
      type: S.TEXT,
      defaultValue: "",
    },
    quantity: {
      type: S.INTEGER,
      defaultValue: 0,
    },
    colors: {
      type: S.ARRAY(S.STRING),
      defaultValue: [],
    },
    avalibleInStock: {
      type: S.VIRTUAL,
      get() {
        return Number(this.getDataValue("quantity")) > 0;
      },
    },
  },
  { sequelize: db, modelName: "products" }
);

module.exports = Product;
