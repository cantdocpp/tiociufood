import { createRouter, createWebHistory } from "vue-router";
import store from '../store'
import Home from '../views/Home'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      needAuth: true
    }
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/Login"),
    meta: {
      needAuth: false
    }
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const accessToken = localStorage.getItem('access_token')
  if (accessToken) {
    const userAccessToken = JSON.parse(accessToken)
    store.commit('SET_USER_DATA', {
      'access_token': userAccessToken
    })
  }
  const isLoggedIn = store.getters.loggedIn
  if (to.meta.needAuth && !isLoggedIn) {
    next({ name: 'Login' })
  }
  next()
})

export default router;
