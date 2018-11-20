const router = require("express").Router();
const assetRoutes = require("./asset");

// Book routes
router.use("/asset", assetRoutes);

module.exports = router;
