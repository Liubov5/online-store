const Router = require('express');
const router = new Router();

router.post("/"); //создавать 
router.get("/") //получать 
router.get("/:id") //получить один девайс 

module.exports = router;