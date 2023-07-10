const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const session = require('express-session');
const expressValidator = require('express-validator');

const morgan = require('morgan');
const path = require('path');

const models = require('./models');
const index = require("./routes/index");
const gab = require("./routes/gab");
const likes = require("./routes/likes");
const login = require("./routes/login");
const logout = require("./routes/logout");
const signup = require("./routes/signup");

app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(expressValidator());

// app.use(express.static(path.join(__dirname,'public')));
app.use(express.static('public'));

app.use(session({
  secret: 'booney',
  resave: false,
  saveUninitialized: true
}));

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set ('view engine', 'mustache');
app.set('layout', 'baseLayout');

app.use(morgan('dev'));

app.use('/', index);
app.use('/gab', gab);
app.use('/likes', likes);
app.use('/login', login);
app.use('/logout', logout);
app.use('/signup', signup);

app.listen(3000, function() {
  console.log("Gabble Chat... Listening on http://www.localhost:3000");
});