'use strict';

const AWS = require('aws-sdk')

const docClient = new AWS.DynamoDB.DocumentClient({
    region: 'us-east-2'
})

module.exports = {
    handler: async (event) => {
        const data = JSON.parse(event.body)
        const { userEmail, restaurantName, rate, review, foodReview, reviewImages } = data

        try {
            await docClient.put({
                TableName: 'mainTable',
                Item: {
                    identifier: `RESTAURANT#${restaurantName}`,
                    sk: `REVIEW#${userEmail}`,
                    restaurantName: restaurantName,
                    userEmail: userEmail,
                    reviewRate: rate,
                    restaurantReviewContent: review,
                    foodReview: foodReview,
                    reviewImages: reviewImages
                }
            }).promise()

            await docClient.update({
                TableName: 'mainTable',
                Key: {
                    identifier: `RESTAURANT#${restaurantName}`,
                    sk: `RESTAURANT#${restaurantName}`
                },
                UpdateExpression: 'ADD #restaurantPhotos = :restaurantPhotos',
                ExpressionAttributeNames: {
                    '#restaurantPhotos': 'restaurantPhotos'
                },
                ExpressionAttributeValues: {
                    ':restaurantPhotos': reviewImages
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
                    message: 'success add restaurant review'
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
