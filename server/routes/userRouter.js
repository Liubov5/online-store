const Router = require('express');
const router = new Router();
const UserController = require("../controllers/userController");
const userController = require('../controllers/userController');

router.post("/registration", userController.registration); //регистрация
router.post("/login", userController.login); 
router.get('/auth', userController.check); //авторизован пользователь или нет по jwt токену


module.exports = router;