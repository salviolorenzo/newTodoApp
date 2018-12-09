// Definitions
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const pgSession = require('connect-pg-simple')(session);
const db = require('./models/db');

// VIEWS
const page = require('./views/page');
const helper = require('./views/helper');

// MODELS
const User = require('./models/User');
const Todo = require('./models/Todo');

// APP.USE
app.use(
  session({
    store: new pgSession({
      pgPromise: db
    }),
    secret: 'nvfviu3b4nt859rbgf5894h5ntg8475934',
    saveUninitialized: false,
    cookie: {
      maxAge: 30 * 24 * 60 * 60 * 1000
    }
  })
);
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
  let isLoggedIn = req.session.user ? true : false;
  console.log(isLoggedIn);
  next();
});

// ROUTES
// Home Page / Login / Register
app.get('/', (req, res) => {
  res.send(
    page(`
  ${helper.header(false)}
  ${helper.login()}
  ${helper.register()}
  `)
  );
});

// Post to login / register
app.post('/login', (req, res) => {
  // get user and check password against password in db
  // define session user
  // redirect to home
});

app.post('/register', (req, res) => {
  // add new user into db
  // define session user
  // redirect to home
});

app.get('/home', (req, res) => {
  res.send(page(`HOME`));
});

app.listen(3000, () => {
  console.log(`Ready...`);
});
