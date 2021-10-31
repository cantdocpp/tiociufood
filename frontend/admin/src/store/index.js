import { createStore } from "vuex";
import axios from 'axios';

export default createStore({
  state: {},
  mutations: {
    SET_USER_DATA (state, userData) {
      state.user = userData
      localStorage.setItem("user", JSON.stringify(userData))
      axios.defaults.headers.common["Authorization"] = `Bearer ${
        userData.token
      }`
    }
  },
  actions: {
    login ({ commit }, credentials) {
      return axios
        .post("https://u7aiz0a2l6.execute-api.us-east-2.amazonaws.com/dev/api/v1/auth/admin/login", credentials)
        .then(({ data }) => {
          commit("SET_USER_DATA", data);
        })
        .catch(err => {
          console.log(err.response)
        })
    },
  },
  modules: {},
  getters: {
    loggedIn (state) {
      return !!state.user
    }
  }
});
