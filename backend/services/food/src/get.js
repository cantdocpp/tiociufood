"use strict";

const AWS = require("aws-sdk")

AWS.config.update({region: 'us-east-2'})

const docClient = new AWS.DynamoDB.DocumentClient({
    region: 'us-east-2'
})

module.exports = {
    async handler() {
        try {
            const foodSearchResults = await docClient.scan({
                TableName: 'mainTable',
                FilterExpression: 'begins_with(#identifier, :identifier) AND contains(#sk, :identifier)',
                ProjectionExpression: 'foodName',
                ExpressionAttributeNames: {
                    '#identifier': 'identifier',
                    '#sk': 'sk'
                },
                ExpressionAttributeValues: {
                    ':identifier': 'FOOD'
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
                    message: 'success get food',
                    foodData: foodSearchResults.Items
                })
            }
        } catch(e) {
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
}
