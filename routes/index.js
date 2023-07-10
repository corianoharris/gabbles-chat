const express = require('express');
const router = express.Router();
const models = require("../models");
const index = require('./signup.js');

router.get('/', (req, res) => {
  if (req.session.user) {
    models.Message.findAll({
      include: [{
        model: models.Users,
        as: 'users'
      }]
    }).then((message) => {
      let array = [];
      message.forEach((message) => {
        console.log(message);
        let object = {
          username: message.dataValues.users.dataValues.username,
          gab: message.dataValues.gabblemessage,
          id: message.dataValues.user_id
        }
        if (req.session.user_id === message.dataValues.user_id) {
          object.delete = true;
        }
        array.push(object);
      })
      res.render('index', { array: array })
    });
  } else {
    res.redirect("/login");
  }
});

router.post('/delete', function (req, res) {
  models.Message.destroy({
    where: {
      id: req.body.deleteKey
    }
  }).then(function () {
    res.redirect("/");
  })
});

router.post('/likes', function (req, res) {
  let gabLikes = models.Likes.create({
    message_id: req.body.likeButton,
    user_id: req.session.user_id
  }).then(function () {
    res.redirect('/likes/' + req.body.likeButton + '/messages');
  })
});

module.exports = router;