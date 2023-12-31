const Router = require('express');
const router = new Router();
const typeController = require("../controllers/typeController");
const checkRoleMiddleware = require("../middleware/checkRoleMiddleware");


router.post("/", checkRoleMiddleware("ADMIN"), typeController.create); //добавлять бренды
router.get("/", typeController.getAll) //получать бренды


module.exports = router;