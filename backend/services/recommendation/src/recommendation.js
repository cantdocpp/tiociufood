"use strict";

const AWS = require("aws-sdk")

AWS.config.update({region: 'us-east-2'})

const docClient = new AWS.DynamoDB.DocumentClient({
    region: 'us-east-2'
})

function dotproduct(arr) {
    var n = 0, lim = 2;
    for (let j = 0; j < arr.length; j++) {
        n += arr[j][0] * arr[j][1];
    }
    return n;
 }

function norm2(arr) {
    let res1 = 0
    let res2 = 0
    for (let i = 0; i < arr.length; i++) {
        res1 += Math.pow(arr[i][0], 2)
    }

    for (let j = 0; j < arr.length; j++) {
        res2 += Math.pow(arr[j][1], 2)
    }

    return Math.sqrt(res1) * Math.sqrt(res2)
}

function cosineSimilarity(arr) {
    let dotProductResult = dotproduct(arr)
    let normResult = norm2(arr)
    return dotProductResult / normResult
}

function getFoodIndex(foodList, foodName) {
    return foodList.findIndex(food => food === foodName)
}

function weightedSum(foodName, foodIndex, userObj, similarityObj) {
    const userOtherFoodReview = []
    const userOtherFoodSimilarity = []
    for (let u = 0; u < userObj.length; u++) {
        if (u !== foodIndex) {
            userOtherFoodReview.push(userObj[u])
        }
    }
    
    for (let l = 0; l < similarityObj.length; l++) {
        const similaritySet = similarityObj[l]['set']
        const similarityVal = similarityObj[l]['similarity']
        if (similaritySet.includes(foodName)) {
            userOtherFoodSimilarity.push(similarityVal)
        }
    }

    let top = 0
    for (let d = 0; d < userOtherFoodReview.length; d++) {
        top += userOtherFoodReview[d] * userOtherFoodSimilarity[d]
    }

    let bot = 0
    for (let e = 0; e < userOtherFoodReview.length; e++) {
        bot += userOtherFoodSimilarity[e]
    }

    return top / bot
}

function getUserFoodRate(userReviewArr, foodList, cosineObj) {
    const newUserObj = []
    const userRateZeroFood = []
    for (let i = 0; i < userReviewArr.length; i++) {
        if (userReviewArr[i] === 0) {
            userRateZeroFood.push(foodList[i])
        }
    }

    for (let j = 0; j < userRateZeroFood.length; j++) {
        const foodIndex = getFoodIndex(foodList, userRateZeroFood[j])
        const foodRate = weightedSum(userRateZeroFood[j], foodIndex, userReviewArr, cosineObj) || 0
        newUserObj.push({
            foodName: userRateZeroFood[j],
            foodRate: foodRate
        })
    }

    return newUserObj
}

module.exports = {
    handler: async (event) => {
        const data = JSON.parse(event.body)
        const { email, username } = data

        try {
            const trainingData = await docClient.scan({
                TableName: 'trainingTable'
            }).promise()

            const userReviewData = await docClient.query({
                TableName: 'mainTable',
                KeyConditionExpression: '#identifier = :identifier AND begins_with(#sk, :sk)',
                ExpressionAttributeNames: {
                    '#identifier': 'identifier',
                    '#sk': 'sk'
                },
                ExpressionAttributeValues: {
                    ':identifier': `USER#${email}`,
                    ':sk': "REVIEW"
                }
            }).promise()

            const userItem = userReviewData.Items
            const trainingItem = trainingData.Items

            if (userItem.length === 0) {
                return {
                    statusCode: 200,
                    headers: {
                        "Access-Control-Allow-Headers": "Content-Type",
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
                    },
                    body: JSON.stringify({
                        message: 'success get recommendation',
                        recommendationData: []
                    })
                }
            }

            const foodList = ['fu yung hai', 'ngohiong', 'sapo tahu', 'bistik babi', 'ifumie', 'lo mie', 'babi kecap', 'caysim cah', 'pak lay cah', 'mun tahu', 'kwetiaw sapi', 'khailan cah', 'babi kuluyuk', 'sapi cah', 'tahu kuah sayur asin', 'hie pien saos', 'cap cay cah', 'bubur babi', 'kodok cah', 'udang yam ha']
            let trainingObjects = {}

            let trainingUserRate = Array.from({length: 20}, (x, i) => 0)
            trainingItem.forEach(training => {
                const trainingUser = training.name
                const trainingReviews = training.reviews

                foodList.forEach((food, index) => {
                    trainingReviews.forEach(review => {
                        if (review['foodName'] == food) {
                            trainingUserRate[index] = review['foodRate']
                        }
                    })
                })
                trainingObjects[trainingUser] = trainingUserRate
                trainingUserRate = Array.from({length: 20}, (x, i) => 0)
            })
            
            let userRate = Array.from({length: 20}, (x, i) => 0)
            userItem.forEach(user => {
                console.log(user, 'user')
                foodList.forEach((food, index) => {
                    if (user['foodName'] == food) {
                        userRate[index] = user.foodRate
                    }
                })
                trainingObjects[username] = userRate
                userRate = Array.from({length: 20}, (x, i) => 0)
            })
            
            const userOjbect = trainingObjects[username]
            const trainingObjectKeys = Object.keys(trainingObjects)
            const endCosineData = []
            for (let i = 0; i < foodList.length; i++) {
                for (let k = i + 1; k < foodList.length; k++) {
                    const foodName = foodList[i]
                    const foodNameAfter = foodList[k]
                    let foodRateSet = []

                    if (foodNameAfter) {
                        let rateArr = []
                        for (let j = 0; j < trainingObjectKeys.length; j++) {
                            const objectKey = trainingObjectKeys[j]
                            const trainingObject = trainingObjects[objectKey]

                            const trainingRate = trainingObject[i]
                            const trainingRateNext = trainingObject[k]

                            if (trainingRate && trainingRateNext) {
                                if (foodRateSet.length === 0) {
                                    foodRateSet.push(...[foodName, foodNameAfter])
                                }
                                rateArr.push([trainingRate, trainingRateNext])
                                // console.log(trainingRate, trainingRateNext, foodName, foodNameAfter, objectKey)
                            } else {
                                if (foodRateSet.length === 0) {
                                    foodRateSet.push(...[foodName, foodNameAfter])
                                }
                            }
                        }
                        if (foodRateSet.length > 0) {
                            endCosineData.push({
                                set: foodRateSet,
                                rate: rateArr,
                                similarity: cosineSimilarity(rateArr) || 0
                            })
                        }
                        foodRateSet = []
                        rateArr = []
                    }
                }
            }

            const foodRateArr = getUserFoodRate(userOjbect, foodList, endCosineData)
            const foodRateArrSort = foodRateArr.sort((a, b) => b.foodRate - a.foodRate)
            return {
                statusCode: 200,
                headers: {
                    "Access-Control-Allow-Headers": "Content-Type",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
                },
                body: JSON.stringify({
                    message: 'success get recommendation',
                    recommendationData: foodRateArrSort
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
                    message: 'success get recommendation',
                    recommendationData: err.message
                })
            }
        }
    }
}
