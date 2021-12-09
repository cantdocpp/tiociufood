import axios from 'axios'

const endpoint = 'https://x1lxjm2gvb.execute-api.us-east-2.amazonaws.com/dev/api/v1/food'

const get_food = () => {
    const url = endpoint

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

const get_food_detail = (foodName) => {
    const url = endpoint + `/${foodName}`

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
    get_food,
    get_food_detail
}
