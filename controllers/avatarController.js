const db = require('../models');

module.exports = {   
  createAvatar: function (req, res) {
    console.log("in avatarcontroller");
    console.log(req.body);
    db.Avatar          
      .create({url : req.body.url})      
      .then(
        function(dbAvatar)
        {
          console.log (dbAvatar);
          return db.User.findByIdAndUpdate(dbAvatar.userid, {avatar: dbAvatar._id});
        }

      )
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  }  
};