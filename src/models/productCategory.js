const { DataTypes } = require("sequelize");
const Product = require('./product');
const Category = require('./category');

const ProductCategory = (sequelize) => {
  return sequelize.define("product_category", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: false,
      allowNull: false,
      references: {
        model: Product,
        key: 'id'
      }
    },
    categoryId: {
      type: DataTypes.INTEGER,
      primaryKey: false,
      allowNull: false,
      references: {
        model: Category,
        key: 'id'
      }
    },
  });
};

module.exports = ProductCategory;
