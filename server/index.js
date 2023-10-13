require('dotenv').config();

const express = require('express');
const sequelize = require('./db');
const models = require("./models/models");
const cors = require('cors');
const router = require("./routes/index");
const errorHandler = require("./middleware/ErrorHandlingMiddleware")

const port = process.env.PORT;
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router)

app.use(errorHandler);
// app.get('/', (req,res)=>{
//     res.status(200).json( {message:"working!"})
// })

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

