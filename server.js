const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

let router = require('./app/routers/s3.router.js');

app.use(cors());
app.use(express.json());
app.use('/', router);

// Create a Server
const port = process.env.PORT;
app.listen(port, () => console.log(`server has started on port: ${port}`));
