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
        const { email, password } = data
        const hashedPassword = await bcrypt.hash(password, 10)

        try {
            await docClient.put({
                TableName: 'adminTable',
                Item: {
                    "email": email,
                    "password": hashedPassword
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
                    message: 'success add admin'
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
        const { email, password } = JSON.parse(event.body)

        try {
            const adminSearchResult = await docClient.query({
                TableName: 'adminTable',
                KeyConditionExpression: '#e = :email',
                ExpressionAttributeNames: {
                    '#e': 'email'
                },
                ExpressionAttributeValues: {
                    ':email': email
                }
            }).promise()

            console.log(adminSearchResult)
            
            if (!adminSearchResult.Items) {
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

            const adminPassword = adminSearchResult.Items[0].password
            const isPasswordValid = await bcrypt.compare(password, adminPassword)
            
            if (isPasswordValid) {
                const adminObj = adminSearchResult.Items[0]
                const token = jwt.sign(adminObj, 'tiociufood')
                
                return {
                    statusCode: 401,
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
                statusCode: 500,
                headers: {
                    "Access-Control-Allow-Headers": "Content-Type",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
                },
                body: JSON.stringify({
                    message: 'AUTH ERROR: Something is wrong on the server'
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
    }
}
