const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.json("get all users information")
})

router.delete("/:id",(req,res,next)=>{
    res.json("delete user information")
})

router.delete("/",(req,res,next)=>{
    res.json("delete all user information")
})

router.post("/",(req,res,next)=>{
    res.json("insert user information")
})
module.exports = router;