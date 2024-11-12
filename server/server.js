const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/",()=> {console.log(`Connected`) });

const express = require("express");
const Flight = require("./model/flight");

const app = express();
const PORT = 8000;
app.listen(PORT, ()=>{
    console.log(`Listening in Port : ${PORT}`)
})
