var stream = require('stream');

const s3 = require('../config/s3.config.js');

exports.doDownload = (req, res) => {
	const s3Client = s3.s3Client;
	const params = s3.downloadParams;

	params.Key = `${req.params.id}-${req.query.filename}.zip`;

	s3Client
		.getObject(params)
		.createReadStream()
		.on('error', function(err) {
			res.json({ error: 'file not found' });
		})
		.pipe(res);
};
