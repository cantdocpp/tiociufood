import axios from 'axios'

const endpoint = 'https://21xrt43zuh.execute-api.us-east-2.amazonaws.com/dev/api/v1/recommendation'

const get_recommendation = (data) => {
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
                console.log(err)
                return err
            })
}

export {
    get_recommendation
}
