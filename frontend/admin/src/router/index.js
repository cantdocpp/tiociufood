import { createRouter, createWebHistory } from "vue-router";
import store from '../store'

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: {
      name: 'Food'
    }
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login"),
    meta: {
      needAuth: false
    }
  },
  {
    path: "/food",
    name: "Food",
    component: () => import("../views/Food"),
    meta: {
      needAuth: true
    }
  },
  {
    path: "/food/similarity/:foodName",
    name: "FoodSimilarity",
    component: () => import("../views/FoodSimilarity"),
    meta: {
      needAuth: true
    }
  },
  {
    path: "/restaurant",
    name: "Restaurant",
    component: () => import("../views/Restaurant"),
    meta: {
      needAuth: true
    }
  },
  {
    path: "/training-data",
    name: "TrainingData",
    component: () => import("../views/TrainingData"),
    meta: {
      needAuth: true
    }
  },
  {
    path: "/user",
    name: "User",
    component: () => import("../views/User"),
    meta: {
      needAuth: true
    }
  },
  {
    path: "/user/:userName",
    name: "UserDetail",
    component: () => import("../views/UserDetail"),
    meta: {
      needAuth: true
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

  if (!to.meta.needAuth && isLoggedIn) {
    next({ name: 'Home' })
  }
  next()
})

export default router;
