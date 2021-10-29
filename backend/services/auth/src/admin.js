'use strict';

const AWS = require('aws-sdk')
const bcrypt = require('bcrypt');

const docClient = new AWS.DynamoDB.DocumentClient({
    region: 'us-east-2'
})

module.exports = {
    add: async (event) => {
        const { email, password } = event
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
                status: 200,
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
                status: 500,
                headers: {
                    "Access-Control-Allow-Headers": "Content-Type",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
                },
                body: JSON.stringify({
                    message: err
                })
            }
        }
    }
}
