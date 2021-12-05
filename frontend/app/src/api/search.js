import axios from 'axios'

const endpoint = 'https://t6u9hz5xq8.execute-api.us-east-2.amazonaws.com/dev/api/v1/search'

const get_search_result = (data) => {
    const url = endpoint

    return axios
            .post(url, data)
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
    get_search_result
}
