const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
const router = express.Router();
const Auth = require("../models/auth.model");
const {verifyToken} = require('../auth.middleware') 

router.post("/register", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const hashpassword = await bcrypt.hash(password,10)
  const auth = new Auth({
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: hashpassword,
  });
  auth
    .save(auth)
    .then((data) => {
      res.json({
        status: 201,
        message: `user registered successfully...`,
      });
    })
    .catch((err) => {
      res.json({
        status: 500,
        message: err.message || "some err with user model object.",
      });
    });
});

router.post("/login", async (req, res) => {
  const {email, password } = req.body;
  // console.log(email)
  try{
    const user = await Auth.findOne({email});
  
    if(user) {
      const passwordMatch = await bcrypt.compare(password, user.password)
      if (passwordMatch){
        // gen token
        const token = jwt.sign({data:[user.firstName,user.lastName,user.email]},process.env.SECRET_KEY,{ expiresIn: '120d' })
        res.json({status: 200, message: "login successful",data:token})
      }else{
        res.json({status:401, message:'invalid credentials'})
      }
    }else{
      res.json({status:401, message:'invalid credentials'})
    }
  }catch(err){
    res.json({status:500, message: 'someting went wrong...'});
  }
});

router.post('/user-profile',verifyToken,(req,res,next)=>{
  const email = req.user['data'][2];
  res.json({status:200, message:"it's a secured url",data:req.user})
})

router.get("/", (req, res, next) => {
  User.find().then(data => res.json({
    status:200,
    data: data
  })).catch(err => res.json({status:500,message: err.message || "some error..."}))
});

router.get("/:id", (req, res, next) => {
    const id = req.params.id;
    User.findById(id).then(data => res.json({status:200,data: data})).catch(err => res.json({status:500,message: err.message || "some error..."}))
});

router.delete("/:id", (req, res, next) => {
    const id = req.params.id;
    User.findByIdAndDelete(id).then(data => res.json({status:200,data:'User deleted'})).catch(err => res.json({status:500,message: err.message || "some error..."}))
});

router.put("/:id", (req, res, next) => {
  const id = req.params.id;
  User.findByIdAndUpdate(id,req.body).then(data => res.json({status:202,data:`User is updated...`})).catch(err => res.json({status:500,message: err.message || "some error..."}))
});

module.exports = router;
