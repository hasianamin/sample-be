const { Sequelize } = require("sequelize");
const mySqlConfig = require("../config/database");

const sequelize = new Sequelize({
  username: mySqlConfig.MYSQL_USERNAME,
  password: mySqlConfig.MYSQL_PASSWORD,
  database: mySqlConfig.MYSQL_DB_NAME,
  port: 3306,
  dialect: "mysql",
  logging: true,
});

// call all the models
const Product = require("../models/product")(sequelize);
const Category = require("../models/category")(sequelize);
const ProductCategory = require("../models/productCategory")(sequelize);
// const ProductCategory = require("../models/productCategory")(sequelize);

// defind the relationship of the model
Product.belongsToMany(Category, {
    through: ProductCategory,
});
Category.belongsToMany(Product, {
    through: ProductCategory,
});

module.exports = {
  sequelize,
  Category,
  Product,
  ProductCategory
};
