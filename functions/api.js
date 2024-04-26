const express = require('express');
const serverless = require('serverless-http');
const dotenv = require('dotenv');


const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development';
dotenv.config({ path: envFile });


const app = express();
const router = express.Router();



router.get('/', (req, res) => {
    res.send('Hell ooobhaiiiii sadmska cicccciddddd');
});

app.use('/.netlify/functions/api', router); // path must route to lambda

module.exports.handler = serverless(app);