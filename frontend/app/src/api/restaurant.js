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

const get_restaurant_detail = (params) => {
    const url = endpoint + `/${params}`

    return axios
            .get(url)
            .then(res => {
                if (res.status === 200) {
                    return res.data
                }
                return res
            })
            .catch(err => {
                return err
            })
}

export {
    get_restaurant,
    get_restaurant_detail
}
