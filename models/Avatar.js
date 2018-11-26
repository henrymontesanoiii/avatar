const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Avatar = new Schema({  
  url:{type : String}
});

module.exports = mongoose.model('Avatar', Avatar);

