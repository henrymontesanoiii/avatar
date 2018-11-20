const router = require("express").Router();
const assetsController = require("../../controllers/assetsController");


router.route("/")
  .get(assetsController.findAll);


module.exports = router;
