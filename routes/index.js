const router = require('express').Router();

router.get('*', (req, res) =>
	res.sendFile(path.join(__dirname, '../client/build/index.html'))
);

module.exports = router;
