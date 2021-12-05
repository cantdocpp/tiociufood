import axios from 'axios'

const endpoint = 'https://x1lxjm2gvb.execute-api.us-east-2.amazonaws.com/dev/api/v1/food'

const get_food = () => {
    const url = endpoint

    return axios
            .get(url)
            .then(res => {
                if (res.status === 200) {
                    return res.data.foodData
                }
                return res
            })
            .catch(err => {
                return err
            })
}

const add_food = (data) => {
    const url = endpoint + '/add'
    const headers = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }

    return axios
            .post(url, data, headers)
            .then(res => {
                return res.data
            })
            .catch(err => {
                console.log(err.response)
            })
}

export {
    get_food,
    add_food
}
