import { createRouter, createWebHistory } from "vue-router";
import store from '../store'

import Home from '../views/Home'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      needAuth: false,
      accessWithAuth: true,
      showNavbar: false
    }
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login"),
    meta: {
      needAuth: false,
      accessWithAuth: false,
      showNavbar: true
    }
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register"),
    meta: {
      needAuth: false,
      accessWithAuth: false,
      showNavbar: true
    }
  },
  {
    path: "/discover",
    name: "Discover",
    component: () => import("../views/Discover"),
    meta: {
      needAuth: false,
      accessWithAuth: true,
      showNavbar: true
    }
  },
  {
    path: "/discover/restaurant/:restaurantName",
    name: "DiscoverRestaurantDetail",
    component: () => import("../views/RestaurantDetail"),
    meta: {
      needAuth: false,
      accessWithAuth: true,
      showNavbar: true
    }
  },
  {
    path: "/search",
    name: "Search",
    component: () => import("../views/Search"),
    meta: {
      needAuth: false,
      accessWithAuth: true,
      showNavbar: true
    }
  }
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
  if (!isLoggedIn) {
    if (to.meta.needAuth) {
      next({ name: 'Login' })
    } else {
      next()
    }
  } else if (isLoggedIn) {
    if (to.meta.accessWithAuth) {
      next()
    } else if (!to.meta.accessWithAuth) {
      next({ name: 'Home' })
    }
  } else {
    next()
  }
})

export default router;
