const { Op, Sequelize } = require("sequelize");
const { Product, Category } = require("../../lib/sequelize");
const Service = require("../service");

class ProductRepository extends Service {
   static addProduct = async (name) => {
    try {
      const result = await Product.create({
        name,
      });

      return this.handleSuccess({
        message: "Recorded!",
        statusCode: 201,
        data: result
      });
    } catch (err) {
      console.log(err);
      return this.handleError({
        message: "Server Error",
        statusCode: 500,
      });
    }
  };

  static deleteProduct = async (id) => {
    try {
      await Product.destroy({
        where: { id },
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

  static getAllProduct = async () => {
    try {
      const findProduct = await Product.findAll({
        include: [
          {
            model: Category
          }
        ],
        sort: [["name", "DESC"]],
      });

      return this.handleSuccess({
        message: "Products found",
        statusCode: 200,
        data: findProduct,
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

module.exports = ProductRepository;
