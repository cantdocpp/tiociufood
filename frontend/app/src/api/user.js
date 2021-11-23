import axios from 'axios'

const endpoint = 'https://u7aiz0a2l6.execute-api.us-east-2.amazonaws.com/dev/api/v1/auth/user'

const register_user = (data) => {
    const url = endpoint + '/add'

    const headers = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    return axios
            .post(url, data, headers)
            .then(res => {
                return res.data
            })
            .catch(err => {
                return err
            })
}

const login_user = (data) => {
    const url = endpoint + '/login'

    const headers = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    return axios
            .post(url, data, headers)
            .then(res => {
                return res.data
            })
            .catch(err => {
                return err
            })
}

export {
    register_user,
    login_user
}
