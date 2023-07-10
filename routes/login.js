const express = require('express');
const router = express.Router();
const models = require("../models");
const index = require('./index.js');
const expressValidator = require('express-validator');

let errorMessages = [];

router.get('/', (req, res) => {
  res.render('login', { wrong: errorMessages });
});

router.post('/', (req, res) => {
  console.log("the body!!!!!!!!!!!!!!!!!!!!!!", req.body);
  req.checkBody("username", "Please Enter a valid username.").notEmpty();
  req.checkBody("password", "Please Enter a password").notEmpty();

  let errors = req.validationErrors();
  if (errors) {
    console.log(errors);
    errors.forEach((validationErrors) => {
      errorMessages.push(errors.msg);
      res.redirect('/login');
    });
  } else {
    models.Users.findOne({
      where: {
        username: req.body.username
      }
    }).then((user) => {
      if (!user) {
        res.redirect('/signup');
      } else {
        if (user.password === req.body.password) {
          req.session.user = user.username;
          req.session.user_id = user.id;
          console.log("/index, on the right page");
          res.redirect('/');
        }
      }
    }).catch((err) => {
      console.log(err);
    })
  }

})


module.exports = router;