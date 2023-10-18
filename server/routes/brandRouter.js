const Router = require('express');
const router = new Router();
const BrandController = require("../controllers/brandController")

router.post("/", BrandController.create); //добавлять бренды
router.get("/", BrandController.getAll) //получать бренды


module.exports = router;