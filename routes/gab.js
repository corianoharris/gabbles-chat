const express = require('express');
const router = express.Router();
const models = require("../models");
const index = require('./index.js');

router.get('/', (req, res) => {
  if (req.session.user) {
    res.render('gab');
  } else {
    res.redirect("/login");
  }
});

router.post('/', (req, res) => {
  let gabMessage = models.Message.create({
    gabblemessage: req.body.gabber,
    user_id: req.session.user_id
  }).then(() => {
    res.redirect('/');
  })
});

module.exports = router;