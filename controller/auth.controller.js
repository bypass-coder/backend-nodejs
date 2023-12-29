const express = require("express");
const router = express.Router();
const Auth = require("../models/auth.model");

router.post("/register", (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const auth = new Auth({
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
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
  
    if(user && user.password === password) {
      res.json({status: 200, message: "login successful"})
    }else{
      res.json({status:401, message:'invalid credentials'})
    }
  }catch(err){
    res.json({status:500, message: 'someting went wrong...'});
  }
  
    // .then((data) => {
    //   res.json({
    //     status: 201,
    //     message: `user registered successfully...`,
    //   });
    // })
    // .catch((err) => {
    //   res.json({
    //     status: 500,
    //     message: err.message || "some err with user model object.",
    //   });
    // });
});


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
