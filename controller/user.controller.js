const express = require("express");
const router = express.Router();
const User = require("../models/user.model");

router.post("/", (req, res) => {
  const { firstName, lastName, dept, age } = req.body;
  const user = new User({
    firstName: firstName,
    lastName: lastName,
    dept: dept,
    age: age,
  });
  user
    .save(user)
    .then((data) => {
      res.json({
        status: 201,
        message: `${data.firstName} is created successfully...`,
      });
    })
    .catch((err) => {
      res.json({
        status: 500,
        message: err.message || "some err with user model object.",
      });
    });
});

router.get("/", (req, res, next) => {
  User.find().then(data => res.json({
    status:200,
    data: data
  })).catch(err => res.json({status:500,message: err.message || "some error..."}))
});

router.get("/:id", (req, res, next) => {
  res.json("get user information");
});

router.delete("/:id", (req, res, next) => {
  res.json("delete user information");
});

router.put("/:id", (req, res, next) => {
  res.json("update user information");
});

module.exports = router;
