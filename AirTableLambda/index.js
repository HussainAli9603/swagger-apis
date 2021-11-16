require('dotenv').config()
const Airtable = require('airtable-node')

const airtable = new Airtable({ apiKey: 'keyxg2Jhp4iDAw28Y' })
  .base('app4xZx2hhxJPklwt')
  .table('noumanLambda')

exports.handler = async (event, context, cb) => {
    const method= event.requestContext.http.method;
    if(method === 'GET'){  
  try {
    const { records } = await airtable.list()
    const products = records.map((product) => {
      const { id } = product
      const { name, class:any, rollNumber,  } = product.fields
     
      return { name , id , rollNumber, class:any}
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
      'headers':{
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Origin': '*',
        'Accept': '*',
        'Content-Type': 'application/json'
      },
      body: 'Server Error',
    }
  }}
  else if(method === 'PUT'){
    const {id} = event.queryStringParameters
      if(id){
      try {
        const product = await airtable.retrieve(id)
        if(product.error){
            return {
                statusCode:404,
                'headers':{
                    'Access-Control-Allow-Headers':'*',
                    'Access-Control-Allow-Origin':'*',
                    'Accept':'*',
                    'Content-Type':'application/json'
                },
                body:'Not Found'
            }
        }else {
            return {
                statusCode:200,
                'headers':{
                    'Access-Control-Allow-Headers':'*',
                    'Access-Control-Allow-Origin':'*',
                    'Accept':'*',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(product)
            }
        }
      } catch (error) {
          return {
              statusCode:500,
              'headers':{
                'Access-Control-Allow-Headers':'*',
                'Access-Control-Allow-Origin':'*',
                'Accept':'*',
                'Content-Type':'application/json'
              },
              body:'Not Found'
          }
      }
  }}
   else if(method === 'POST'){
    const {id, name, rollNumber} = JSON.parse(event.body)
      if(id && name && rollNumber){
      try {
        const fields = { rollNumber: Number(rollNumber) , name: String(name) }
        const product = await airtable.update(id, {fields} )


        if(product.error){
            return {
                statusCode:404,
                'headers':{
                    'Access-Control-Allow-Headers':'*',
                    'Access-Control-Allow-Origin':'*',
                    'Accept':'*',
                    'Content-Type':'application/json'
                },
                body:'Not Found'
            }
        }else {
            
          
            return {
                statusCode:200,
                'headers':{
                    'Access-Control-Allow-Headers':'*',
                    'Access-Control-Allow-Origin':'*',
                    'Accept':'*',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(product)
            }
        }
      } catch (error) {
          return {
              statusCode:500,
              'headers':{
                'Access-Control-Allow-Headers':'*',
                'Access-Control-Allow-Origin':'*',
                'Accept':'*',
                'Content-Type':'application/json'
              },
              body:'Not Found'
          }
      }
  }
}
  }