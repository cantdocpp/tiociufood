const AWS = require('aws-sdk')

AWS.config.update({region: 'us-east-2'});

const docClient = new AWS.DynamoDB.DocumentClient({
    region: 'us-east-2'
})

module.exports = {
    handler: async (event) => {
        const data = JSON.parse(event.body)
        const { restaurantName } = data
        try {
            const restaurantReview = await docClient.query({
              TableName: 'mainTable',
              KeyConditionExpression: '#identifier = :identifier AND begins_with(#sk, :sk)',
              ExpressionAttributeNames: {
                  '#identifier': 'identifier',
                  '#sk': 'sk'
              },
              ExpressionAttributeValues: {
                  ':identifier': `RESTAURANT#${restaurantName}`,
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
                  message: 'success get restaurant review',
                  reviewData: restaurantReview.Items
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