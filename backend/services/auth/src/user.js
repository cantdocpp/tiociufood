'use strict';

const AWS = require('aws-sdk')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const docClient = new AWS.DynamoDB.DocumentClient({
    region: 'us-east-2'
})

module.exports = {
    add: async (event) => {
        const data = JSON.parse(event.body)
        const { email, password, username } = data
        const hashedPassword = await bcrypt.hash(password, 10)

        try {
            await docClient.put({
                TableName: 'mainTable',
                Item: {
                    "identifier": `USER#${email}`,
                    "sk": `USER#${email}`,
                    "email": email,
                    "username": username,
                    "password": hashedPassword,
                    "profileImage": 'https://tiociufood.s3.us-east-2.amazonaws.com/3d9066fd-e644-40b9-92e1-7fc9aeca285d_original_user-image.jpg'
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
                    message: 'success add user'
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
                    message: 'Something is wrong on the server'
                })
            }
        }
    },
    login: async (event) => {
        // for dev
        // const { email, password } = event

        // for staging
        const data = JSON.parse(event.body)
        const { email, password } = data

        try {
            const userSearchResult = await docClient.query({
                TableName: 'mainTable',
                KeyConditionExpression: '#i = :email AND #sk = :sk',
                ExpressionAttributeNames: {
                    '#i': 'identifier',
                    '#sk': 'sk'
                },
                ExpressionAttributeValues: {
                    ':email': `USER#${email}`,
                    ':sk': `USER#${email}`
                }
            }).promise()
            
            if (userSearchResult.Items.length <= 0) {
                return {
                    statusCode: 401,
                    headers: {
                        "Access-Control-Allow-Headers": "Content-Type",
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
                    },
                    body: JSON.stringify({
                        message: 'username or password is wrong'
                    })
                }
            }

            const userPassword = userSearchResult.Items[0].password
            const isPasswordValid = await bcrypt.compare(password, userPassword)
            
            if (isPasswordValid) {
                const adminObj = userSearchResult.Items[0]
                const token = jwt.sign(adminObj, 'tiociufood')
                
                return {
                    statusCode: 200,
                    headers: {
                        "Access-Control-Allow-Headers": "Content-Type",
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
                    },
                    body: JSON.stringify({
                        access_token: token
                    })
                }
            }

            return {
                statusCode: 401,
                headers: {
                    "Access-Control-Allow-Headers": "Content-Type",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
                },
                body: JSON.stringify({
                    message: 'username or password is wrong'
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
                    message: 'Something is wrong on the server',
                    debug: JSON.stringify(err.message)
                })
            }
        }
    },
    get: async () => {
        try {
            const userList = await docClient.scan({
                TableName: 'mainTable',
                FilterExpression: 'begins_with(#identifier, :identifier) AND contains(#sk, :sk)',
                ProjectionExpression: 'restaurantName, restaurantAddress, restaurantThumbnail',
                ExpressionAttributeNames: {
                    '#identifier': 'identifier',
                    '#sk': 'sk'
                },
                ExpressionAttributeValues: {
                    ':identifier': 'USER',
                    ':sk': 'USER'
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
                    message: 'success get user',
                    userData: userList.Items
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
