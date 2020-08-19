const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
	const bearerHeader = req.headers['authorization'];
	if (typeof bearerHeader !== 'undefined') {
		const bearerToken = bearerHeader.split(' ')[1];
		req.token = bearerToken;
		next();
	} else {
		res.status(401).send({ status: 'Unauthorized', code: 401 });
	}
};
