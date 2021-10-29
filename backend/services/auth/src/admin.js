'use strict';

const AWS = require('aws-sdk')
const bcrypt = require('bcrypt');
const { response } = require('../../../utils/response')

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
            return response(200, {
                message: 'Add admin success'
            })
        } catch(err) {
            return response(500, {
                message: 'Something wrong on the server'
            })
        }
    }
}
