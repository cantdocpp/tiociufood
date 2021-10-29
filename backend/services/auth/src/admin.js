'use strict';

const { response } = require('../../../utils/response')

module.exports = {
    add: async (event) => {
        return response(200, {
            status: 'ok',
            message: 'api success'
        })
    }
}