const express = require("express");
const router = express.Router();
const Blog = require("../models/blog.model");


// middleware
const auth = (req,res,next) =>{
  console.log("this is a middleware")
  next();
}

router.get("/", auth ,(req, res) => {
  res.json({
    status: 200,
    message:"your server is up and running"
  })
});

// router.get("/", (req, res, next) => {
//   User.find().then(data => res.json({
//     status:200,
//     data: data
//   })).catch(err => res.json({status:500,message: err.message || "some error..."}))
// });

// router.get("/:id", (req, res, next) => {
//     const id = req.params.id;
//     User.findById(id).then(data => res.json({status:200,data: data})).catch(err => res.json({status:500,message: err.message || "some error..."}))
// });

// router.delete("/:id", (req, res, next) => {
//     const id = req.params.id;
//     User.findByIdAndDelete(id).then(data => res.json({status:200,data:'User deleted'})).catch(err => res.json({status:500,message: err.message || "some error..."}))
// });

// router.put("/:id", (req, res, next) => {
//   const id = req.params.id;
//   User.findByIdAndUpdate(id,req.body).then(data => res.json({status:202,data:`User is updated...`})).catch(err => res.json({status:500,message: err.message || "some error..."}))
// });

module.exports = router;
