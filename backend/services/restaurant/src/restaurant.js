'use strict';

const AWS = require('aws-sdk')

const docClient = new AWS.DynamoDB.DocumentClient({
  region: 'us-east-2'
})


module.exports = {
  addRestaurant: async (event) => {
    // for dev
    // const { name, address, description } = event

    // for staging
    const data = JSON.parse(event.body)
    const { name, address, description } = data

    try {
      await docClient.put({
        TableName: 'mainTable',
        Item: {
          identifier: `RESTAURANT#${name}`,
          sk: `RESTAURANT#${name}`,
          restaurantName: name,
          restaurantAddress: address,
          restaurantDescription: description
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
        ProjectionExpression: 'identifier',
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
