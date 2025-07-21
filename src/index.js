const express = require('express');
const dotenv = require('dotenv');


const app  = express();
dotenv.config();


app.listen(process.env.PORT, ()=>{
    console.log('Server Running at port: 3000');
})