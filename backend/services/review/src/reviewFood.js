'use strict';

const AWS = require('aws-sdk')

const docClient = new AWS.DynamoDB.DocumentClient({
    region: 'us-east-2'
})

module.exports = {
    handler: async (event) => {
        const data = JSON.parse(event.body)
        const { userEmail, restaurantName, reviews, username } = data

        try {
            reviews.forEach(async (review) => {
                await docClient.put({
                    TableName: 'mainTable',
                    Item: {
                        identifier: `FOOD#${review.foodName}`,
                        sk: `REVIEW#${userEmail}`,
                        restaurantName: restaurantName,
                        username: username,
                        foodRate: review.rate,
                        reviewContent: review.review
                    }
                }).promise()

                await docClient.put({
                    TableName: 'mainTable',
                    Item: {
                        identifier: `USER#${userEmail}`,
                        sk: `REVIEW#${review.foodName}`,
                        restaurantName: restaurantName,
                        username: username,
                        foodName: review.foodName,
                        foodRate: review.rate,
                        reviewContent: review.review
                    }
                }).promise()
            })

            return {
                statusCode: 200,
                headers: {
                    "Access-Control-Allow-Headers": "Content-Type",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
                },
                body: JSON.stringify({
                    message: 'success add food review'
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
                body: JSON.stringify(err.message)
            }
        }
    }
}
