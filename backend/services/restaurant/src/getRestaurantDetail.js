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
            const restaurantDetail = await docClient.query({
                TableName: 'mainTable',
                KeyConditionExpression: '#identifier = :identifier AND #sk = :sk',
                ExpressionAttributeNames: {
                    '#identifier': 'identifier',
                    '#sk': 'sk'
                },
                ExpressionAttributeValues: {
                    ':identifier': `RESTAURANT#${nameQuery}`,
                    ':sk': `RESTAURANT#${nameQuery}`
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
                    message: 'success get restaurant detail',
                    restaurantData: restaurantDetail
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
}
