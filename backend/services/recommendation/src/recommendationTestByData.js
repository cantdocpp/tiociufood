"use strict";

function threeDigits(n, p) {
    var result = n.toFixed(p);
    return result <= n ? result: (result - Math.pow(0.1,p)).toFixed(p);
}

function dotproduct(arr) {
    var n = 0, lim = 2;
    for (let j = 0; j < arr.length; j++) {
        n += arr[j][0] * arr[j][1];
    }
    return n;
 }

function norm2(arr) {
    const sqrtArr1 = []
    const sqrtArr2 = []
    let sqrtArr1Result = 0
    let sqrtArr2Result = 0
    for (let i = 0; i < arr.length; i++) {
        sqrtArr1.push(Math.pow(arr[i][0], 2))
        sqrtArr2.push(Math.pow(arr[i][1], 2))
    }

    for (let j = 0; j < sqrtArr1.length; j++) {
        sqrtArr1Result += sqrtArr1[j]
        sqrtArr2Result += sqrtArr2[j]
    }

    return Math.sqrt(sqrtArr1Result) * Math.sqrt(sqrtArr2Result)
}

function cosineSimilarity(arr) {
    let dotProductResult = dotproduct(arr)
    let normResult = norm2(arr)
    const res = dotProductResult / normResult
    const resThreeDigit = threeDigits(res, 3)

    return Number(resThreeDigit)
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
        // console.log(foodName)
        // console.log(userOtherFoodReview[d], userOtherFoodSimilarity[d], '++++++++++++')
        top += userOtherFoodReview[d] * userOtherFoodSimilarity[d]
    }

    let bot = 0
    for (let e = 0; e < userOtherFoodReview.length; e++) {
        // console.log(foodName)
        // console.log(userOtherFoodSimilarity[e], 'nei')
        bot += userOtherFoodSimilarity[e]
    }

    // console.log(top, 'top')

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
        const { input } = data

        try {
            const trainingItem = [
                {
                    name: 'patrick',
                    reviews: [
                        {
                            foodName: 'fu yung hai',
                            foodRate: 0
                        },
                        {
                            foodName: 'ngohiong',
                            foodRate: 4
                        },
                        {
                            foodName: 'sapo tahu',
                            foodRate: 2
                        },
                        {
                            foodName: 'bistik babi',
                            foodRate: 0
                        },
                        {
                            foodName: 'ifumie',
                            foodRate: 5
                        },
                        {
                            foodName: 'babi kecap',
                            foodRate: 0
                        },
                    ]
                },
                {
                    name: 'handri',
                    reviews: [
                        {
                            foodName: 'fu yung hai',
                            foodRate: 0
                        },
                        {
                            foodName: 'ngohiong',
                            foodRate: 4
                        },
                        {
                            foodName: 'sapo tahu',
                            foodRate: 0
                        },
                        {
                            foodName: 'bistik babi',
                            foodRate: 0
                        },
                        {
                            foodName: 'ifumie',
                            foodRate: 0
                        },
                        {
                            foodName: 'babi kecap',
                            foodRate: 5
                        },
                    ]
                },
                {
                    name: 'william',
                    reviews: [
                        {
                            foodName: 'fu yung hai',
                            foodRate: 0
                        },
                        {
                            foodName: 'ngohiong',
                            foodRate: 2
                        },
                        {
                            foodName: 'sapo tahu',
                            foodRate: 5
                        },
                        {
                            foodName: 'bistik babi',
                            foodRate: 0
                        },
                        {
                            foodName: 'ifumie',
                            foodRate: 4
                        },
                        {
                            foodName: 'babi kecap',
                            foodRate: 2
                        },
                    ]
                },
                {
                    name: 'herman',
                    reviews: [
                        {
                            foodName: 'fu yung hai',
                            foodRate: 0
                        },
                        {
                            foodName: 'ngohiong',
                            foodRate: 0
                        },
                        {
                            foodName: 'sapo tahu',
                            foodRate: 3
                        },
                        {
                            foodName: 'bistik babi',
                            foodRate: 4
                        },
                        {
                            foodName: 'ifumie',
                            foodRate: 4
                        },
                        {
                            foodName: 'babi kecap',
                            foodRate: 0
                        },
                    ]
                },
                {
                    name: 'aleks',
                    reviews: [
                        {
                            foodName: 'fu yung hai',
                            foodRate: 5
                        },
                        {
                            foodName: 'ngohiong',
                            foodRate: 0
                        },
                        {
                            foodName: 'sapo tahu',
                            foodRate: 0
                        },
                        {
                            foodName: 'bistik babi',
                            foodRate: 4
                        },
                        {
                            foodName: 'ifumie',
                            foodRate: 2
                        },
                        {
                            foodName: 'babi kecap',
                            foodRate: 3
                        },
                    ]
                },
                {
                    name: 'victor',
                    reviews: [
                        {
                            foodName: 'fu yung hai',
                            foodRate: 0
                        },
                        {
                            foodName: 'ngohiong',
                            foodRate: 1
                        },
                        {
                            foodName: 'sapo tahu',
                            foodRate: 0
                        },
                        {
                            foodName: 'bistik babi',
                            foodRate: 5
                        },
                        {
                            foodName: 'ifumie',
                            foodRate: 0
                        },
                        {
                            foodName: 'babi kecap',
                            foodRate: 2
                        },
                    ]
                },
                {
                    name: 'andre',
                    reviews: [
                        {
                            foodName: 'fu yung hai',
                            foodRate: 4
                        },
                        {
                            foodName: 'ngohiong',
                            foodRate: 5
                        },
                        {
                            foodName: 'sapo tahu',
                            foodRate: 0
                        },
                        {
                            foodName: 'bistik babi',
                            foodRate: 5
                        },
                        {
                            foodName: 'ifumie',
                            foodRate: 0
                        },
                        {
                            foodName: 'babi kecap',
                            foodRate: 0
                        },
                    ]
                },
            ]

            trainingItem.push(input)

            const foodList = ['fu yung hai', 'ngohiong', 'sapo tahu', 'bistik babi', 'ifumie', 'babi kecap']
            let trainingObjects = {}

            let trainingUserRate = Array.from({length: 5}, (x, i) => 0)
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
                trainingUserRate = Array.from({length: 6}, (x, i) => 0)
            })
            
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

            // console.log(endCosineData)

            const resArr = []

            for (let b = 0; b < trainingObjectKeys.length; b++) {
                const userRecommendObj = {}
                const foodRateArr = getUserFoodRate(trainingObjects[trainingObjectKeys[b]], foodList, endCosineData)
                userRecommendObj.name = trainingObjectKeys[b]
                userRecommendObj.recommendation = foodRateArr.sort((a, b) => b.foodRate - a.foodRate)
                resArr.push(userRecommendObj)
            }

            return {
                statusCode: 200,
                headers: {
                    "Access-Control-Allow-Headers": "Content-Type",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
                },
                body: JSON.stringify({
                    message: 'success get recommendation',
                    recommendationData: resArr
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
