import axios from 'axios'

const endpoint = 'https://13ysk0g75b.execute-api.us-east-2.amazonaws.com/dev/api/v1/uploader'

const upload_images = (data) => {
    const url = endpoint

    const headers = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }

    return axios
            .post(url, data, headers)
            .then(res => {
                if (res.status === 200) {
                    return res.data
                }
                return res
            })
            .catch(err => {
                console.log(err.response)
                return err
            })
}

export {
    upload_images
}
