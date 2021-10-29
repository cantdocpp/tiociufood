'use strict';

module.exports.response = async (statusCode, body) => {
    return {
        statusCode,
        // permissive CORS headers
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        },
        body: JSON.stringify(body),
    }
}
