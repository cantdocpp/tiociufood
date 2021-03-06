const AWS = require('aws-sdk')

AWS.config.update({region: 'us-east-2'});

const docClient = new AWS.DynamoDB.DocumentClient({
    region: 'us-east-2'
})

module.exports = {
    handler: async () => {
        try {
            const restaurantSearchResult = await docClient.scan({
              TableName: 'mainTable',
              FilterExpression: 'begins_with(#identifier, :identifier) AND #sk < :sk',
              ProjectionExpression: 'restaurantName, restaurantAddress, restaurantThumbnail',
              ExpressionAttributeNames: {
                  '#identifier': 'identifier',
                  '#sk': 'sk'
              },
              ExpressionAttributeValues: {
                  ':identifier': 'RESTAURANT',
                  ':sk': 'RESTAURANT$'
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
}