const express = require("express");
const router = express.Router();
const User = require("../models/user.model");

router.post("/create", (req, res) => {
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

router.get("/get-all-users", (req, res, next) => {
  User.find().then(data => res.json(data)).catch(err => res.json({status:500,message: err.message || "some error..."}))
});

router.get("/:id", (req, res, next) => {
    const id = req.params.id;
    User.findById(id).then(data => res.json(data)).catch(err => res.json({status:500,message: err.message || "some error..."}))
});

router.delete("/:id", (req, res, next) => {
    const id = req.params.id;
    User.findByIdAndDelete(id).then(data => res.json('User deleted')).catch(err => res.json({status:500,message: err.message || "some error..."}))
});

router.put("/:id", (req, res, next) => {
  const id = req.params.id;
  User.findByIdAndUpdate(id,req.body).then(data => res.json({status:202,data:`User is updated...`})).catch(err => res.json({status:500,message: err.message || "some error..."}))
});

module.exports = router;
