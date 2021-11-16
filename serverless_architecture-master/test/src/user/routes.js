const express = require('express');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');
const app = express();
const routes = express.Router({
    mergeParams: true
});
routes.get('/user', (req, res) => {
    res.status(200).json({
        works: false
    });
});
module.exports = { routes }