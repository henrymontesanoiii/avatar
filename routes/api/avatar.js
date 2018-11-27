const router = require('express').Router();
const avatarController = require('../../controllers/avatarController');


router
  .route('/create')
  .post(avatarController.createAvatar)  

  router
  .route('/find/:id')
  .get(avatarController.find)
  module.exports = router;


