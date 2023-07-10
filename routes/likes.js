const express = require('express');
const router = express.Router();
const models = require("../models");

router.get('/:id/messages', (req, res) => {
  models.Likes.findAll({
    where: {
      message_id: req.params.id
    }, include: [{
      model: models.Users,
      as: 'userLike'
    },
    {
      model: models.Message,
      as: 'messageLike'
    }]
  }).then((likes) => {
    let likeArray = [];
    likes.forEach(function (like) {
      let likeObject = {
        username: like.userLike.username,
      }
      likeArray.push(likeObject);
    })
    res.render('likes', { array: likeArray })
  })
});


module.exports = router;