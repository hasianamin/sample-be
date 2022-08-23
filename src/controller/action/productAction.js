const ProductRepository = require("../repo/productRepo");
const ProductCategoryRepository = require("../repo/productCategoryRepo");

const productControllers = {
  getAllProduct: async (req, res) => {
    try {
      const serviceResult = await ProductRepository.getAllProduct();
      if (!serviceResult.success) throw serviceResult;
      return res.status(serviceResult.statusCode || 200).json({
        message: serviceResult.message,
        result: serviceResult.data,
      });
    } catch (err) {
      console.log(err);
      return res.status(err.statusCode || 500).json({
        message: err.message,
      });
    }
  },

  deleteProduct: async (req, res) => {
    try {
      const { id } = req.params
      const serviceResult = await ProductRepository.deleteProduct(id);
      if (!serviceResult.success) throw serviceResult;
      return res.status(serviceResult.statusCode || 200).json({
        message: serviceResult.message,
      });
    } catch (err) {
      console.log(err);
      return res.status(err.statusCode || 500).json({
        message: err.message,
      });
    }
  },

  addProduct: async (req, res) => {
    try {
      const { name, categoryId } = req.body;
      const serviceResult = await ProductRepository.addProduct(name);
      await ProductCategoryRepository.addProductCategory(serviceResult.data.id, categoryId)
      if (!serviceResult.success) throw serviceResult;
      return res.status(serviceResult.statusCode || 200).json({
        message: serviceResult.message,
        result: serviceResult.data,
      });
    } catch (err) {
      console.log(err);
      return res.status(err.statusCode || 500).json({
        message: err.message,
      });
    }
  },
};

module.exports = productControllers;
