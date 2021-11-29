const AWS = require('aws-sdk')

AWS.config.update({region: 'us-east-2'});

const docClient = new AWS.DynamoDB.DocumentClient({
    region: 'us-east-2'
})

module.exports = {
    handler: async (event) => {
        const { name } = event.pathParameters
    }
}
