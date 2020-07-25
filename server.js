const express = require('express');
const app = express();
const path = require('path');

let router = require('./app/routers/s3.router.js');
app.use('/', router);

// Create a Server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server has started on port: ${port}`));
