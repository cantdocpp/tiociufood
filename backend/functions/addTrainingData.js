const AWS = require('aws-sdk')

const docClient = new AWS.DynamoDB.DocumentClient({
    region: 'us-east-2'
})

const requestJson = {
    "RequestItems": {
        'trainingTable': [
            {
                'PutRequest': {
                    'Item': {
                        'name': 'philip bryan',
                        'review': [
                            {
                                'foodName': 'fu yung hai',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'babi kecap',
                                'foodRate': 5
                            }
                        ]
                    }
                }
            }
        ]
    }
}

async function run() {
    const res = await docClient.batchWrite(requestJson).promise()
    console.log(res)
}

run()
