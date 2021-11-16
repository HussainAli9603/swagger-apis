const awsServerlessExpress = require('aws-serverless-express')
const app = require('../../test/src/index')
const server = awsServerlessExpress.createServer(app)

module.exports.hello = async (event, context, callback) => {
  const body = JSON.parse(event.body)
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      works: body.name
    })
  });

};