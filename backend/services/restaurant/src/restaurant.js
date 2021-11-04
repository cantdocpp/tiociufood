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
        TableName: 'tiociufoodTable',
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
    // for dev
    // const { restaurantName } = event

    // for staging
    // const data = JSON.parse(event.body)
    // const { restaurantName } = data

    try {
      const restaurantSearchResult = await docClient.query({
        TableName: 'tiociufoodTable',
        IndexName: 'pk',
        KeyConditionExpression: '#pk = :pk',
        ExpressionAttributeNames: {
            '#pk': 'pk'
        },
        ExpressionAttributeValues: {
            ':pk': `RESTAURANT`
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
            restaurants: restaurantSearchResult
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