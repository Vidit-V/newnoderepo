const express = require('express');
const serverless = require('serverless-http');
// const dotenv = require('dotenv');

const app = express();
const router = express.Router();

// const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development';
// dotenv.config({ path: envFile });
router.get('/', (req, res) => {
    res.send('Hello World from Netlify prodcution pr push kiya Lambda!');
});

app.use('/.netlify/functions/api', router); // path must route to lambda

module.exports.handler = serverless(app);