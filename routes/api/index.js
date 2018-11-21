const router = require('express').Router();
const shopRoutes = require('./walmart');

router.use('/shop', shopRoutes);

module.exports = router;