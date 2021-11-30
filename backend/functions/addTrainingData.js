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
                        'name': 'patrick',
                        'reviews': [
                            {
                                'foodName': 'fu yung hai',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'ngohiong',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'sapo tahu',
                                'foodRate': 2
                            },
                            {
                                'foodName': 'bistik babi',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'ifumie',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'babi kecap',
                                'foodRate': 0
                            },
                        ]
                    }
                }
            },
            {
                'PutRequest': {
                    'Item': {
                        'name': 'handri',
                        'reviews': [
                            {
                                'foodName': 'fu yung hai',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'ngohiong',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'sapo tahu',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'bistik babi',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'ifumie',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'babi kecap',
                                'foodRate': 5
                            },
                        ]
                    }
                }
            },
            {
                'PutRequest': {
                    'Item': {
                        'name': 'william',
                        'reviews': [
                            {
                                'foodName': 'fu yung hai',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'ngohiong',
                                'foodRate': 2
                            },
                            {
                                'foodName': 'sapo tahu',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'bistik babi',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'ifumie',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'babi kecap',
                                'foodRate': 2
                            },
                        ]
                    }
                }
            },
            {
                'PutRequest': {
                    'Item': {
                        'name': 'herman',
                        'reviews': [
                            {
                                'foodName': 'fu yung hai',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'ngohiong',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'sapo tahu',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'bistik babi',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'ifumie',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'babi kecap',
                                'foodRate': 0
                            },
                        ]
                    }
                }
            },
            {
                'PutRequest': {
                    'Item': {
                        'name': 'aleks',
                        'reviews': [
                            {
                                'foodName': 'fu yung hai',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'ngohiong',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'sapo tahu',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'bistik babi',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'ifumie',
                                'foodRate': 2
                            },
                            {
                                'foodName': 'babi kecap',
                                'foodRate': 3
                            },
                        ]
                    }
                }
            },
            {
                'PutRequest': {
                    'Item': {
                        'name': 'victor',
                        'reviews': [
                            {
                                'foodName': 'fu yung hai',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'ngohiong',
                                'foodRate': 1
                            },
                            {
                                'foodName': 'sapo tahu',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'bistik babi',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'ifumie',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'babi kecap',
                                'foodRate': 2
                            },
                        ]
                    }
                }
            },
            {
                'PutRequest': {
                    'Item': {
                        'name': 'andre',
                        'reviews': [
                            {
                                'foodName': 'fu yung hai',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'ngohiong',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'sapo tahu',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'bistik babi',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'ifumie',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'babi kecap',
                                'foodRate': 0
                            },
                        ]
                    }
                }
            },
        ]
    }
}

async function run() {
    const res = await docClient.batchWrite(requestJson).promise()
    console.log(res)
}

run()
