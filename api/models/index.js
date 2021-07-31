const User = require("./User");
const Carrito = require("./Carrito");
const Product = require("./Product");
const Valoration = require("./Valoration");
const Coment = require("./Coment");
const Category = require("./Category");
const ProductsCarrito = require("./ProducstCarrito");
const ProductsCategories = require("./ProductsCategories");

// RELATIONS

User.belongsToMany(Product, { through: "favorites" });

Product.belongsToMany(Category, { through: ProductsCategories });
Category.belongsToMany(Product, { through: ProductsCategories });

User.hasMany(Coment);
Product.hasMany(Coment);

Product.hasMany(Valoration);

User.hasMany(Carrito)
Carrito.belongsToMany(Product, { through: ProductsCarrito });
Product.belongsToMany(Carrito, { through: ProductsCarrito });

module.exports = {
  User,
  Carrito,
  Product,
  Valoration,
  Coment,
  Category,
  ProductsCategories,
  ProductsCarrito
};