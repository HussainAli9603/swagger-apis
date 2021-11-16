require('dotenv').config()
const Airtable = require('airtable-node')

const airtable = new Airtable({ apiKey: 'keypUsqOBNQtIbGBH' })
  .base('appIW2AnXI5xsEBhx')
  .table('Hussain')

const errors = {
  MISSING_FIELDS: 'Some Fields are missing',
  EMPTY_FIELDS: 'Some fields are not to be empty',
  AIR_TABLE_CREATE_ERROR: 'Error while creating records'
}
const success = {
  SUCCESS_CREATE_RECORD: 'Record created successfully. Record_id: '
}

const default_header = {
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Allow-Origin': '*',
  'Accept': '*',
  'Content-Type': 'application/json'
}

exports.handler = async (event, context, cb) => {
  const method = event.requestContext.http.method;
  if (method === 'GET') {
    try {
      const { records } = await airtable.list()
      const products = records.map((product) => {
        const { id } = product
        const { name, classs, rollNumber, email } = product.fields

        return { name, id, rollNumber, classs, email }
      })
      return {
        statusCode: 200,
        'headers': {
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Accept': '*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(products),
      }
    } catch (error) {
      return {
        statusCode: 500,
        'headers': {
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Accept': '*',
          'Content-Type': 'application/json'
        },
        body: 'Server Error',
      }
    }
  } else if (method === 'PUT') {
    const { id } = event.queryStringParameters
    if (id) {
      try {
        const product = await airtable.retrieve(id)
        if (product.error) {
          return {
            statusCode: 404,
            'headers': {
              'Access-Control-Allow-Headers': '*',
              'Access-Control-Allow-Origin': '*',
              'Accept': '*',
              'Content-Type': 'application/json'
            },
            body: 'Not Found'
          }

        } else {
          return {
            statusCode: 200,
            'headers': {
              'Access-Control-Allow-Headers': '*',
              'Access-Control-Allow-Origin': '*',
              'Accept': '*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
          }

        }

      }
      catch (error) {
        return {
          statusCode: 500,
          'headers': {
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'Accept': '*',
            'Content-Type': 'application/json'
          },
          body: 'Not Found'
        }
      }
    }
  } else if (method === "POS") {
    const { id, name, rollNumber, email } = JSON.parse(event.body)
    if (id && name && rollNumber && email) {
      try {
        const fields = { rollNumber: Number(rollNumber), name: String(name), email: String(email) }
        const product = await airtable.update(id, { fields })
        if (product.error) {
          return {
            statusCode: 404,
            "header": {
              'Access-Control-Allow-Headers': '*',
              'Access-Control-Allow-Origin': '*',
              'Accept': '*',
              'Content-Type': 'application/json'
            },
            body: 'Not Found'
          }
        } else {
          return {
            statusCode: 200,
            'headers': {
              'Access-Control-Allow-Headers': '*',
              'Access-Control-Allow-Origin': '*',
              'Accept': '*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
          }

        }
      } catch (error) {
        return {
          statusCode: 500,
          'headers': {
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'Accept': '*',
            'Content-Type': 'application/json'
          },
          body: 'Not Found'
        }
      }
    }
  }
  else if (method === "POST") {
    const error = checkRequiredFields(event);
    if (error) {
      let response = {
        'statusCode': 400,
        'headers': default_header,
        'error': error
      }
      return response
    }
    else {
      try {
        const records = await airtable.create([{
          "fields": event.body
        }])
        let response = {
          'statusCode': 200,
          'headers': default_header,
          'body': `${success.SUCCESS_CREATE_RECORD}${records[0].getId()}`
        }
        return response
      } catch (err) {
        let response = {
          'statusCode': 400,
          'headers': default_header,
          'message': errors.AIR_TABLE_CREATE_ERROR,
          'body': JSON.stringify(err)
        }
        return response;

      }
    }
  }




};

function checkRequiredFields(event) {
  if (!event.body.name || !event.body.email || !event.body.rollNumber || !event.body.classs)
    return errors.MISSING_FIELDS

}
