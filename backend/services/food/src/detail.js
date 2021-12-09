const AWS = require('aws-sdk')

AWS.config.update({region: 'us-east-2'});

const docClient = new AWS.DynamoDB.DocumentClient({
    region: 'us-east-2'
})

module.exports = {
    handler: async (event) => {
        const { name } = event.pathParameters

        const nameQuery = name.split('-').join(' ')

        try {
            const foodDetail = await docClient.query({
                TableName: 'mainTable',
                KeyConditionExpression: '#identifier = :identifier AND #sk = :sk',
                ExpressionAttributeNames: {
                    '#identifier': 'identifier',
                    '#sk': 'sk'
                },
                ExpressionAttributeValues: {
                    ':identifier': `FOOD#${nameQuery}`,
                    ':sk': `FOOD#${nameQuery}`
                }
            }).promise()

            const restaurantList = await docClient.scan({
                TableName: 'mainTable',
                FilterExpression: 'begins_with(#identifier, :identifier) AND contains(#sk, :sk)',
                ProjectionExpression: 'restaurantName, restaurantAddress, restaurantImage, restaurantFood',
                ExpressionAttributeNames: {
                    '#identifier': 'identifier',
                    '#sk': 'sk'
                },
                ExpressionAttributeValues: {
                    ':identifier': 'RESTAURANT',
                    ':sk': 'RESTAURANT'
                }
              }).promise()

              const reviewList = await docClient.query({
                TableName: 'mainTable',
                KeyConditionExpression: '#identifier = :identifier AND begins_with(#sk, :sk)',
                ExpressionAttributeNames: {
                    '#identifier': 'identifier',
                    '#sk': 'sk'
                },
                ExpressionAttributeValues: {
                    ':identifier': `FOOD#${nameQuery}`,
                    ':sk': 'REVIEW'
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
                    message: 'success get food detail',
                    foodDetailData: foodDetail,
                    foodReview: reviewList,
                    restaurantData: restaurantList
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
