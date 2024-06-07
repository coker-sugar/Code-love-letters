import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/index',
    name: 'name',
    component: () => import(/* webpackChunkName: "index" */ '../views/IndexText/IndexView.vue')
  },
  {
    path: '/china',
    name: 'china',
    component: () => import(/* webpackChunkName: "china" */ '../views/IndexText/JourneyView.vue')
  },
  {
    path: '/giant',
    name: 'giant',
    component: () => import(/* webpackChunkName: "giant" */ '../views/IndexText/GiantView.vue')
  },
  {
    path: '/future',
    name: 'future',
    component: () => import(/* webpackChunkName: "future" */ '../views/IndexText/FutureView.vue'),
    children: [{
      path: '/future',
      component: () => import(/* webpackChunkName: "future" */'../views/futrue/futrue.vue')
    }]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
