import axios from 'axios'

const endpoint = 'https://xjstgo0r0a.execute-api.us-east-2.amazonaws.com/dev/api/v1/training'

const get_food_similarity = (data) => {
    const url = endpoint + '/similarity'

    return axios
            .post(url, data)
            .then(res => {
                return res.data
            })
            .catch(err => {
                console.log(err.response)
                return err
            })
}

export {
    get_food_similarity
}
