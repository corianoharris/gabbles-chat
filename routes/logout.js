const express = require('express');
const router = express.Router();
const models = require("../models");

router.get('/', (req, res) => {
  req.session.destroy();
  res.redirect('login');
});


module.exports = router;