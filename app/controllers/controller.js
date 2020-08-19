const s3 = require('../config/s3.config.js');
const jwt = require('jsonwebtoken');

exports.getUserToken = (req, res) => {
	if (req.body.user === process.env.USER) {
		jwt.sign({ user: process.env.USER }, process.env.JWT_SECRET, { expiresIn: '15s' }, (err, token) => {
			return err ? res.send({ error: err }) : res.json({ token });
		});
	} else {
		res.status(401).send({ code: 401, status: 'Unauthorized', error: 'User does not have permission' });
	}
};

exports.doDownload = (req, res) => {
	const s3Client = s3.s3Client;
	const params = s3.downloadParams;

	jwt.verify(req.token, process.env.JWT_SECRET, (error, authData) => {
		if (error) {
			res.status(403).send({ status: 'Forbidden', code: 403, error: error });
		} else {
			params.Key = `${req.params.id}-${req.query.filename}.zip`;

			s3Client
				.getObject(params)
				.createReadStream()
				.on('error', function(err) {
					res.status(401).send({ error: err });
				})
				.pipe(res);
		}
	});
};
