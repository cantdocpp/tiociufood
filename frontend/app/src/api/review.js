import axios from 'axios'

const endpoint = 'https://sbcuttefva.execute-api.us-east-2.amazonaws.com/dev/api/v1/review'

const add_review_restaurant = (data) => {
    const url = endpoint + '/restaurant/add'

    return axios
            .post(url, data)
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

const add_review_food = (data) => {
    const url = endpoint + '/food/add'

    console.log('data: ', data)

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
    add_review_restaurant,
    add_review_food
}
