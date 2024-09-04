const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDb = require('./config/db');

// dotenv configuration

dotenv.config();

// mongodb configuration
connectDb();

// rest object
const app = express();

// middlewares
app.use(express.json());
app.use(morgan('dev'));


// routes
app.use('/api/user', require('./routes/userRoutes'))






 const PORT = process.env.PORT;
app.listen(PORT,()=>{
    // console.log("Running on PORT:"+PORT)
})