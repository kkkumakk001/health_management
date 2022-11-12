import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/list',
    name: 'list',
    component: () => import(/* webpackChunkName: "list" */ '../views/List.vue')
  },
  {
    path: '/graph',
    name: 'graph',
    component: () => import(/* webpackChunkName: "graph" */ '../views/Graph.vue')
  },
  {
    path: '/config',
    name: 'config',
    component: () => import(/* webpackChunkName: "config" */ '../views/Config.vue')
  },
  {
    path: '/addEdit',
    name: 'addEdit',
    component: () => import(/* webpackChunkName: "addEdit" */ '../views/AddEdit.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/logout',
    name: 'logout',
    component: () => import(/* webpackChunkName: "logout" */ '../views/Logout.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
