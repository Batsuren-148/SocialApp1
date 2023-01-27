const express = require("express");
const router = express.Router();
const path = require("path");
const newUserModel = require("../model/registerModel");

// register lvv get hvselt ywuulahad
router.get("/", (req, res) => {
  res.render(path.join(__dirname, "../views/register.ejs"));
});

// register lvv post hvselt ywuulahad
router.post("/", (req, res) => {
  let surname = req.body.surname;
  let username = req.body.username;
  let password = req.body.password;
  let confirmPassword = req.body.confirmPassword;

  let newUser = new newUserModel({
    surname: surname,
    username: username,
    password: password,
    confirmPassword: confirmPassword,
  });
  newUser
    .save()
    .then((result) => {
      console.log(result);
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err + "Бүртгүүлэхэд алдаа гарлаа");
    });
});

module.exports = router;
