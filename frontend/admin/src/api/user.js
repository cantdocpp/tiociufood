import axios from 'axios'

const endpoint = 'https://u7aiz0a2l6.execute-api.us-east-2.amazonaws.com/dev/api/v1/auth/user'

const get_all_user = () => {
    const url = endpoint

    return axios
            .get(url)
            .then(res => {
                return res.data
            })
            .catch(err => {
                console.log(err.response)
            })
}

const get_user_detail = (data) => {
    const url = endpoint + '/detail'

    return axios
            .post(url, data)
            .then(res => {
                return res.data
            })
            .catch(err => {
                console.log(err.response)
            })
}

export {
    get_all_user,
    get_user_detail
}
