const express = require('express');
const app = express();
const dotenv = require('dotenv')
const mongoose = require('mongoose');
dotenv.config()
const PORT = process.env.PORT || 5000;
const uri = `mongodb+srv://${process.env.DBUSER}:${process.env.PASS}@cluster0.krk0gyq.mongodb.net/?retryWrites=true&w=majority`

app.use(express.json()); // middleware...
app.use(express.urlencoded({extended:true}))


app.get('/',(req,res)=>{
    res.json({
        status: 200,
        message:"your server is up and running",
        uri: uri
    })
})

app.get('/home',(req,res)=>{
    res.json("this is a home router...")
})

app.listen(PORT,()=>{
    console.log(`listening on port number -> ${PORT}`);
})