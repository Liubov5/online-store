require('dotenv').config();

const express = require('express');
const sequelize = require('./db');
const models = require("./models/models");
const cors = require('cors');
const fileupload = require("express-fileupload");
const router = require("./routes/index");
const errorHandler = require("./middleware/ErrorHandlingMiddleware")
const path = require("path")

const port = process.env.PORT;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")));
app.use(fileupload({}))
app.use('/api', router)

// app.get('/',(req, res)=>{
//     res.status(200).json({message:"lol"})
// })

app.use(errorHandler);

const start = async()=>{
    try{
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(port, ()=> console.log(port)); 
    }catch(e){
        console.log(e)
    }
}

start();

