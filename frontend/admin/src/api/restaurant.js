import axios from 'axios'

const endpoint = 'https://0ozp9hlr08.execute-api.us-east-2.amazonaws.com/dev/api/v1/restaurant'

const get_restaurant = () => {
    const url = endpoint

    return axios
            .get(url)
            .then(res => {
                if (res.status === 200) {
                    return res.data.restaurantData
                }
                return res
            })
            .catch(err => {
                return err
            })
}

const add_restaurant = (data) => {
    const url = endpoint + '/add'

    console.log(data.restaurantImage, '__________________')

    return axios
            .post(url, data)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err.response)
            })
}

export {
    get_restaurant,
    add_restaurant
}
