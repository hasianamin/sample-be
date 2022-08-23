const { Op, Sequelize } = require("sequelize");
const { Category } = require("../../lib/sequelize");
const Service = require("../service");

class CategoryRepository extends Service {
   static addCategory = async (name) => {
    try {
      await Category.create({
        name,
      });

      return this.handleSuccess({
        message: "Recorded!",
        statusCode: 201,
      });
    } catch (err) {
      console.log(err);
      return this.handleError({
        message: "Server Error",
        statusCode: 500,
      });
    }
  };

  static getAllCategory = async () => {
    try {
      const findCategory = await Product.findAll({
        sort: [["name", "DESC"]],
      });

      return this.handleSuccess({
        message: "Category found",
        statusCode: 200,
        data: findCategory,
      });
    } catch (err) {
      console.log(err);
      return this.handleError({
        message: "Server Error",
        statusCode: 500,
      });
    }
  };
}

module.exports = CategoryRepository;
