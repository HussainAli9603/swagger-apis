const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const express = require('express');
const cors = require('cors');

const { routes: userRoutes } = require('./user/routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(awsServerlessExpressMiddleware.eventContext())
app.use('/user', userRoutes);

module.exports = app
