// core
import Vue from 'vue';
import Router from 'vue-router'

// import views here
import Home from './views/Home.vue'


Vue.use(Router)

// declare paths here
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})

export default router