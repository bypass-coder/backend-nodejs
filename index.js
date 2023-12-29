const dotenv = require('dotenv')
dotenv.config()
const express = require('express');
const app = express();
const db = require('./db.config')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000;
// controller import 
const userRouter = require('./controller/user.controller')
const blogRouter = require('./controller/blog.controller')

app.use(bodyParser.json());
// app.use(express.json()); // middleware...
app.use(express.urlencoded({extended:true}))
db.dbConfig();

app.get('/',(req,res)=>{
    res.json({
        status: 200,
        message:"your server is up and running"
    })
})
app.use('/api/v1/users',userRouter)
// app.use('/api/v1/orders')
// app.use('/api/v1/employees')
app.use('/api/v1/blogs',blogRouter)
// app.use('/api/v1/post')

app.listen(PORT,()=>{
    console.log(`listening on port number -> ${PORT}`);
})

// http://localhost:8787/api/v1/users/createuser
// http://localhost:8787/api/v1/users/
// http://localhost:8787/api/v1/users/update
// http://localhost:8787/api/v1/users/delete
// http://localhost:8787/api/v1/users/findone
// http://localhost:8787/api/v1/users/deleteall
// http://localhost:8787/api/v1/users/findactiveuser



// users
// CURD
// create user
// findall
// update
// delete
// find one
// delete all
// find active users














