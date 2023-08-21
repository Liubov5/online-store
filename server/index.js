require('dotenv').config({path: '.env'});

const express = require('express');
const port = process.env.PORT;

const app = express();

app.listen(port, ()=> console.log(port)); 

