require('dotenv').config()
const Airtable = require('airtable')
const axios = require('axios')

const airtable = new Airtable({ apiKey: 'keypUsqOBNQtIbGBH' })
  .base('appIW2AnXI5xsEBhx')
  .table('Hussain');

const airtable2 = new Airtable({ apiKey: 'keypUsqOBNQtIbGBH' })
  .base('appIW2AnXI5xsEBhx')
  .table('Hussain2')


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
      const recordss = await airtable.select({
        maxRecords: 100,
      })
      await recordss.eachPage(function page(records, fetchNextPage) {
        { getrecords = records }
        fetchNextPage();
      });

      const recordss2 = await airtable2.select({
        maxRecords: 100,
      })
      await recordss2.eachPage(function page(records, fetchNextPage) {
        { UserAddress = records }
        fetchNextPage();
      })
      return {
        statusCode: 200,
        default_header,
        body: JSON.stringify({ UserAddress, getrecords }),
      }
    } catch (error) {
      return {
        statusCode: 500,
        default_header,
        body: 'Server Error',
      }
    }
  } else if (method === 'PUT') {
    const { id } = event.queryStringParameters
    if (id) {
      try {
        const product = await airtable.find(id)
        // const fields = {
        //   fields: { "userId": product.id }
        // }
        // const userAddress = await airtable2.find(id)
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
  }
  else if (method === "PATCH") {
    const { id, name, rollNumber, email, classs } = JSON.parse(event.body);
    if (id && name && rollNumber && email && classs) {
      try {
        const fields = {
          id: id, fields: {
            rollNumber: Number(rollNumber), name: String(name), email: String(email), classs: Number(classs)
          }
        }
        const product = await airtable.update([fields])
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

      } catch (error) {
        return {
          statusCode: 500,
          'headers': {
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'Accept': '*',
            'Content-Type': 'application/json'
          },
          body: error
        }
      }
    }
  }
  else if (method === "POST") {
    // const error = checkRequiredFields(event);
    // if (error) {
    //   let response = {
    //     'statusCode': 400,
    //     'headers': default_header,
    //     'error': error
    //   }
    //   return error
    // }
    // else {
    try {
      const { name, email, rollNumber, classs } = JSON.parse(event.body)
      const bodyParser = JSON.parse(event.body)
      const records = await airtable.create([{
        "fields": bodyParser
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
        'message': err,
        'body': JSON.stringify(err)
      }
      return response;

    }
    // }
  }
  if (method === "DELETE") {
    try {
      const { id } = event.queryStringParameters
      const deleteRecord = await airtable.destroy(id)
      if (deleteRecord.error) {
        return {
          statusCode: 404,
          'headers': {
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'Accept': '*',
            'Content-Type': 'application/json'
          },
          body: 'ID Not Found'
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
          body: 'DELETE Successfully'
        }
      }
    }
    catch (err) {
      let response = {
        'statusCode': 400,
        'headers': default_header,
        'message': err,
        'body': JSON.stringify(err)
      }
    }
  }




};

function checkRequiredFields(event) {
  if (!event.body.name || !event.body.email || !event.body.rollNumber || !event.body.classs)
    return errors.MISSING_FIELDS

}
