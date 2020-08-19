let express = require('express');
let router = express.Router();
const serverAuth = require('../controllers/serverAuth.js');

const s3Controller = require('../controllers/controller.js');

router
	.get('/api/files/:id', serverAuth.verifyToken, s3Controller.doDownload)
	.post('/api/user/auth', s3Controller.getUserToken);

module.exports = router;
