const express = require('express');
const app = express();
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');



app.use(express.json());
app.use(morgan('dev'));

app.get('/',(req,res,next)=>{
 res.status(200).send({
    messege:" server running",
 });
});









 const PORT = process.env.PORT;
app.listen(PORT,()=>{
    // console.log("Running on PORT:"+PORT)
})