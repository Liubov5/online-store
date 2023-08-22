require('dotenv').config();

const express = require('express');
const sequelize = require('./db')
const port = process.env.PORT;
const app = express();

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

