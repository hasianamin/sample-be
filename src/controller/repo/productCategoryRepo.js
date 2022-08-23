const { Op, Sequelize } = require("sequelize");
const { ProductCategory } = require("../../lib/sequelize");
const Service = require("../service");

class ProductCategoryRepository extends Service {
   static addProductCategory = async (productId, categoryId) => {
    try {
      await ProductCategory.create({
        productId,
        categoryId
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
}

module.exports = ProductCategoryRepository;
