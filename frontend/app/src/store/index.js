import { createStore } from "vuex";
import axios from 'axios';

export default createStore({
  state: {
    accessToken: null,
    loggedIn: false
  },
  mutations: {
    SET_USER_DATA (state, userData) {
      const accessToken = userData.access_token
      state.accessToken = accessToken
      localStorage.setItem("access_token", JSON.stringify(accessToken))
      state.loggedIn =  true
    }
  },
  actions: {
    login ({ commit }, credentials) {
      return axios
        .post("https://u7aiz0a2l6.execute-api.us-east-2.amazonaws.com/dev/api/v1/auth/admin/login", credentials)
        .then(res => {
          commit("SET_USER_DATA", res.data);
          return res
        })
        .catch(err => {
          if (err.response.status === 401) {
            return err.response
          }
          return {
            status: 500,
            message: 'server error'
          }
        })
    },
  },
  modules: {},
  getters: {
    loggedIn (state) {
      return !!state.loggedIn
    }
  }
});
