const Router = require('express');
const router = new Router();
const typeController = require("../controllers/typeController");



router.post("/", typeController.create); //добавлять бренды
router.get("/", typeController.getAll) //получать бренды


module.exports = router;