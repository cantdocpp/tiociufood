"use strict";

const AWS = require("aws-sdk")
const { v4: uuidv4 } = require("uuid")
const Jimp = require("jimp")
const s3 = new AWS.S3()
const Busboy = require('busboy');

const bucket = 'tiociufood'
const MAX_SIZE = 40000000 // 4MB
const PNG_MIME_TYPE = "image/png"
const JPEG_MIME_TYPE = "image/jpeg"
const JPG_MIME_TYPE = "image/jpg"
const MIME_TYPES = [PNG_MIME_TYPE, JPEG_MIME_TYPE, JPG_MIME_TYPE]

AWS.config.update({region: 'us-east-2'})

const docClient = new AWS.DynamoDB.DocumentClient({
    region: 'us-east-2'
})

const parser = (event, fileZise) => {
    return new Promise((resolve, reject) => {
        const busboy = new Busboy({
            headers: {
                ...event.headers,
                'content-type':
                event.headers['content-type'] || event.headers['Content-Type']
            },
            limits: {
                fileZise
            }
        });
    
        const result = {
            files: []
        };
    
        busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
            const uploadFile = {}
            file.on('data', data => {
                uploadFile.content = data
            });
            file.on('end', () => {
                if (uploadFile.content) {
                    uploadFile.filename = filename
                    uploadFile.contentType = mimetype
                    uploadFile.encoding = encoding
                    uploadFile.fieldname = fieldname
                    result.files.push(uploadFile)
                 }
            })
        })
    
        busboy.on('field', (fieldname, value) => {
            result[fieldname] = value
        });
    
        busboy.on('error', error => {
            reject(error);
        })
    
        busboy.on('finish', () => {
            resolve(result)
        })
    
        busboy.write(event.body, event.isBase64Encoded ? 'base64' : 'binary')
        busboy.end()
    })
}

const isAllowedFile = (size, mimeType) => {
    if (size < MAX_SIZE && !mimeType.includes(MIME_TYPES)) {
        return true
    } else {
        return false
    }
}

const uploadToS3 = (bucket, key, buffer, mimeType) => {
    return new Promise((resolve, reject) => {
        s3.upload(
            { Bucket: bucket, Key: key, Body: buffer, ContentType: mimeType },
            function(err, data) {
                if (err) reject(err);
                resolve(data)
            })
    })
}

const resize = (buffer, mimeType, width) => {
    return new Promise((resolve, reject) => {
        Jimp.read(buffer)
        .then(image => image.resize(width, Jimp.AUTO).quality(70).getBufferAsync(mimeType))
        .then(resizedBuffer => resolve(resizedBuffer))
        .catch(error => reject(error))
    })
}

module.exports = {
    handler: async (event) => {
        try {
            const formData = await parser(event, MAX_SIZE)
            const { files } = formData

            const imageArr = []

            for (let i = 0; i < files.length; i++) {
                const file = files[i]

                const uid = uuidv4()
                const originalKey = `${uid}_original_${file.filename}`

                const [originalFile] = await Promise.all([
                    uploadToS3(bucket, originalKey, file.content, file.contentType)
                ])

                const signedOriginalUrl = s3.getSignedUrl("getObject", { Bucket: originalFile.Bucket, Key: originalKey, Expires: 60000 })

                imageArr.push(signedOriginalUrl)
            }

            return {
                statusCode: 200,
                headers: {
                    "Access-Control-Allow-Headers": "Content-Type",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
                },
                body: JSON.stringify({
                    message: 'success upload image',
                    data: {
                        images: imageArr,
                    }
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
                    message: 'failed upload image',
                    error: JSON.parse(err.message)
                })
            }
        }
    }
}
