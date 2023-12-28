const express = require('express');
const router = express.Router();
const User = require('../models/user.model')


router.post("/",(req,res)=>{
    res.json(req.body);
    // res.json('data received...');
})


router.get('/',(req,res,next)=>{
    res.json("get all users information")
})

router.get('/:id',(req,res,next)=>{
    res.json("get user information")
})

router.delete("/:id",(req,res,next)=>{
    res.json("delete user information")
})



router.put("/:id",(req,res,next)=>{
    res.json("update user information")
})

module.exports = router;