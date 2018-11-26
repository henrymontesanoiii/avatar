const router = require('express').Router();
const userRoutes = require('./users');
const assetRoutes = require("./asset");
// API routes
router.use('/users', userRoutes);





// Book routes
router.use("/asset", assetRoutes);

module.exports = router;
