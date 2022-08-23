const { DataTypes } = require("sequelize");

const Category = (sequelize) => {
  return sequelize.define("category", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

module.exports = Category;
