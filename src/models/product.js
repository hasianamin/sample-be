const { DataTypes } = require("sequelize");

const Product = (sequelize) => {
  return sequelize.define("product", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

module.exports = Product;
