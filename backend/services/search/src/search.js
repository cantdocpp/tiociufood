'use strict';

const AWS = require('aws-sdk')

const docClient = new AWS.DynamoDB.DocumentClient({
    region: 'us-east-2'
})

module.exports = {
    handler: async (event) => {
        const data = JSON.parse(event.body)
        const { searchText } = data

        try {
            const searchResult = await docClient.scan({
                TableName: 'mainTable',
                FilterExpression: 'begins_with(#identifier, :identifier) AND contains(#identifier, :search)',
                ProjectionExpression: 'restaurantName, restaurantAddress, restaurantThumbnail',
                ExpressionAttributeNames: {
                    '#identifier': 'identifier',
                },
                ExpressionAttributeValues: {
                    ':identifier': 'RESTAURANT',
                    ':search': searchText
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
                    message: 'success get search result',
                    result: searchResult
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
                    error: JSON.stringify(err.message)
                })
            }
        }
    }
}
