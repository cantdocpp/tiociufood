const AWS = require('aws-sdk')

const docClient = new AWS.DynamoDB.DocumentClient({
    region: 'us-east-2'
})

async function getRestaurantList() {
    const restaurantResult = await docClient.scan({
        TableName: 'mainTable',
        FilterExpression: 'begins_with(#identifier, :identifier) AND #sk < :sk',
        ProjectionExpression: 'identifier, sk, restaurantName, restaurantAddress, restaurantThumbnail, halal',
        ExpressionAttributeNames: {
            '#identifier': 'identifier',
            '#sk': 'sk'
        },
        ExpressionAttributeValues: {
            ':identifier': 'RESTAURANT',
            ':sk': 'RESTAURANT$'
        }
    }).promise()
    const restaurantItems = restaurantResult.Items

    return restaurantItems
}

async function addHalalAttributeToRestaurant(identifier, sk) {
    const updateResponse = docClient.update({
        TableName: 'mainTable',
        Key: {
            'identifier': identifier,
            'sk': sk
        },
        UpdateExpression: 'set #halal = :halal',
        ExpressionAttributeNames: {
            '#halal': 'halal'
        },
        ExpressionAttributeValues: {
            ':halal': false
        }
    }).promise()

    return updateResponse
}

async function start() {
    const restaurants = await getRestaurantList()
    for (let i = 0; i < restaurants.length; i++) {
        const restaurant = restaurants[i]
        const identifier = restaurant.identifier
        const sk = restaurant.sk
        const updateResponse = await addHalalAttributeToRestaurant(identifier, sk)
        console.log(updateResponse)
    }
}

start()
