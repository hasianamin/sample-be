const CategoryRepository = require("../repo/categoryRepo");

const categoryControllers = {
  getAllCategory: async (req, res) => {
    try {
      const serviceResult = await CategoryRepository.getAllCategory();
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

  addCategory: async (req, res) => {
    try {
      const { name } = req.body;
      const serviceResult = await CategoryRepository.addCategory(name);
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

module.exports = categoryControllers;
