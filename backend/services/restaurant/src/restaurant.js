'use strict';

const AWS = require('aws-sdk')

AWS.config.update({region: 'us-east-2'});

const docClient = new AWS.DynamoDB.DocumentClient({
  region: 'us-east-2'
})

// Create S3 service object
const s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  params: {
    Bucket: 'tiociufood'
  }
})


module.exports = {
  addRestaurant: async (event) => {
    // for dev
    // const { name, address, description } = event

    // for staging
    const data = JSON.parse(event.body)
    const { restaurantName, restaurantAddress, restaurantDescription, restaurantImage } = data

    try {
      const image = await s3.putObject({
        key: restaurantImage.name,
        body: restaurantImage
      })
      return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        },
        body: JSON.stringify({
            message: 'success add image',
            image: image
        })
      }
    } catch(err) {
      return {
        statusCode: 400,
        headers: {
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        },
        body: JSON.stringify({
            error: err
        })
      }
    }

    try {
      await docClient.put({
        TableName: 'mainTable',
        Item: {
          identifier: `RESTAURANT#${restaurantName}`,
          sk: `RESTAURANT#${restaurantName}`,
          restaurantName: restaurantName,
          restaurantAddress: restaurantAddress,
          restaurantDescription: restaurantDescription
        }
      }).promise()
      return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        },
        body: JSON.stringify({
            message: 'success add restaurant'
        })
      }
    } catch(err) {
      return {
        statusCode: 500,
        headers: {
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        },
        body: JSON.stringify({
            message: 'something is wrong on the server',
            error: err
        })
      }
    }
  },
  getRestaurant: async (event) => {
    try {
      const restaurantSearchResult = await docClient.scan({
        TableName: 'mainTable',
        FilterExpression: 'begins_with(#identifier, :identifier)',
        ProjectionExpression: 'restaurantName, restaurantDescription, restaurantAddress',
        ExpressionAttributeNames: {
            '#identifier': 'identifier'
        },
        ExpressionAttributeValues: {
            ':identifier': 'RESTAURANT'
        }
      }).promise()
      return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        },
        body: JSON.stringify({
            message: 'success get restaurant',
            restaurantData: restaurantSearchResult.Items
        })
      }
    } catch(err) {
      return {
        statusCode: 500,
        headers: {
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        },
        body: JSON.stringify({
            message: 'something is wrong on the server',
            error: err
        })
      }
    }
  }
};
