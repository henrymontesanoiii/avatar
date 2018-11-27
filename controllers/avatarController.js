const db = require('../models');

module.exports = {   
  createAvatar: function (req, res) {
    console.log("in avatarcontroller");
    console.log(req.body);
    db.Avatar          
      .create(req.body)      
      .then(dbAvatar => console.log(dbAvatar))     
      .catch(err => res.status(422).json(err));
  },
  find: function(req,res){
    console.log("in avatarcontroller");
    console.log(req.params.id );
    db.Avatar
    .find({userid: req.params.id})
    .then(dbAvatar =>res.json(dbAvatar))
    .catch(err => res.status(422).json(err));
  }
};