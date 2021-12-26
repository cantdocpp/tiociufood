import { createStore } from "vuex"
import axios from 'axios'
import jwt from 'jsonwebtoken'

export default createStore({
  state: {
    accessToken: null,
    userData: null,
    loggedIn: false
  },
  mutations: {
    SET_USER_DATA (state, userData) {
      const accessToken = userData.access_token
      const userState = jwt.decode(accessToken)
      state.userData = userState
      state.accessToken = accessToken
      localStorage.setItem("access_token", JSON.stringify(accessToken))
      state.loggedIn =  true
    },
    DELETE_USER_DATA(state) {
      state.accessToken = null
      state.userData = null
      state.loggedIn = false
    }
  },
  actions: {
    login ({ commit }, credentials) {
      return axios
        .post("https://u7aiz0a2l6.execute-api.us-east-2.amazonaws.com/dev/api/v1/auth/user/login", credentials)
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
    logout({ commit }) {
      commit('DELETE_USER_DATA')
    }
  },
  modules: {},
  getters: {
    loggedIn(state) {
      return !!state.loggedIn
    },
    
    userStateData(state) {
      return state.userData
    }
  }
});
