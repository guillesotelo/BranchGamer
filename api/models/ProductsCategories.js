const S = require("sequelize");
const db = require("../db");

class ProductsCategories extends S.Model {}

ProductsCategories.init({},
  { sequelize: db }
);

module.exports = ProductsCategories;
