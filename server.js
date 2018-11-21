const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const morgan = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// Import routes
const routes = require('./routes');

// Set up Express
const app = express();
const PORT = process.env.PORT || 3001;
<<<<<<< HEAD

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev')); // for logging

// We need to use sessions to keep track of our user's login status
app.use(session({secret: "keyboard cat", resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

// Serve up static assets
app.use(express.static('client/build'));
// Add routes, both API and route to client/build
app.use(routes);

// Set up passport to authenticate
const User = require('./models/user');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/WidgetWorld');
=======
 
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/libMoji");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitToScrape");

// Add routes, both API and view
app.use(routes);

>>>>>>> aa0a4d047c2366620f21c382fce2cb82710ce4e9

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});