'use strict';

const AWS = require('aws-sdk')
const bcrypt = require('bcrypt');

const docClient = new AWS.DynamoDB.DocumentClient({
    region: 'us-east-2'
})

module.exports = {
    add: async (event) => {
        const hashedPassword = await bcrypt.hash(event.body.password, 10)
        console.log(event.body.email, '<<<<<<<<<<<<<<<<< email')
        try {
            await docClient.put({
                TableName: 'adminTable',
                Item: {
                    "email": event.body.email,
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
                    message: err
                })
            }
        }
    }
}
