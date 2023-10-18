const Router = require('express');
const router = new Router();
const deviceController = require('../controllers/deviceController');

router.post("/", deviceController.create); //создавать 
router.get("/", deviceController.getAll) //получать 
router.get("/:id", deviceController.getOne) //получить один девайс 

module.exports = router;