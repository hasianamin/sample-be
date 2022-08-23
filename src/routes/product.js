const {ProductController} = require("../controller");

const router = require("express").Router();

router.get("/", ProductController.getAllProduct);

router.post("/", ProductController.addProduct);

router.delete("/:id", ProductController.deleteProduct);

module.exports = router;
