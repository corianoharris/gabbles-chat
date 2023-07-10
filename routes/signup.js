const express = require('express');
const router = express.Router();
const models = require("../models");
const index = require('./index.js');

let errorMessages = [];

router.get('/', function (req, res) {

  res.render('signup');
});

router.post('/', function (req, res) {
  console.log(req.body);
  req.checkBody("username", "Please Enter a valid username.").notEmpty();
  req.checkBody("password", "Please Enter a password").notEmpty();
  // req.checkBody("repassword", "Your passwords do not match, please re-enter").equals('password');

  let errors = req.validationErrors();
  if (errors) {
    console.log(errors);
    errors.forEach((validationErrors) => {
      errorMessages.push(errors.msg);
      res.redirect('/signup');
    });
  } else {
    let newUser = models.Users.create({
      username: req.body.username,
      password: req.body.password
    }).then((user) => {
      req.session.user = user.username;
      req.session.user_id = user.id;
      res.redirect('/login');
    });
  }
});

module.exports = router;
