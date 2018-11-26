const router = require('express').Router();
const userRoutes = require('./users');
const assetRoutes = require("./asset");
const avatarRoutes = require("./avatar");
// API routes
router.use('/users', userRoutes);





// Book routes
router.use("/asset", assetRoutes);
router.use("/avatar",avatarRoutes);

module.exports = router;
