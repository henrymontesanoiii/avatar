const router = require('express').Router();
const avatarController = require('../../controllers/avatarController');


router
  .route('/create')
  .post(avatarController.createAvatar)  

module.exports = router;

