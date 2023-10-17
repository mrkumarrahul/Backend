require('dotenv').config();
const express=require('express');
const cors = require("cors")

const connectToDb =require('./config/db.js')

const app =express();


// Express middlewares
app.use(express.json())
app.use(express.urlencoded({extented:true}))

app.use(cors())

// init database
connectToDb()
const userRoutes = require('./routes/userRoutes.js')

app.use('/',userRoutes)

module.exports=app
