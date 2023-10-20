const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController');
const authMiddleware = require("../middleware/authMiddleware");

router.post("/registration", userController.registration); //регистрация
router.post("/login", userController.login); 
router.get("/auth", authMiddleware, userController.check); //авторизован пользователь или нет по jwt токену


module.exports = router;