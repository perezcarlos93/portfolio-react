const router = require('express').Router();
const github = require('./books');

// Book routes
router.use('/github', github);

module.exports = router;
