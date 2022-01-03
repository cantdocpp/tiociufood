const AWS = require('aws-sdk')

const docClient = new AWS.DynamoDB.DocumentClient({
    region: 'us-east-2'
})

module.exports = {
    handler: async (event) => {
        const data = JSON.parse(event.body)
        const { restaurantName, halal } = data

        docClient.update({
            TableName: 'mainTable',
            Key: {
                'identifier': `RESTAURANT#${restaurantName}`,
                'sk': `RESTAURANT#${restaurantName}`
            },
            UpdateExpression: 'set #halal = :halal',
            ExpressionAttributeNames: {
                '#halal': 'halal'
            },
            ExpressionAttributeValues: {
                ':halal': halal
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
                message: 'success change halal attribute'
            })
        }
    }
}
