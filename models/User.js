const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
 
  
  userCreated: {
    type: Date,
    default: Date.now
  }
});

// Set up passport to 
User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);

