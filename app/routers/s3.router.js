let express = require('express');
let router = express.Router();

const s3Controller = require('../controllers/s3.controller.js');

router.get('/api/files/:filename', s3Controller.doDownload);

module.exports = router;
