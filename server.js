const express = require('express');
const app = express();
const path = require('path');

let router = require('./app/routers/s3.router.js');
app.use('/', router);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

// Create a Server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server has started on port: ${port}`));
