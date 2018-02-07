import Vue from 'vue'
import Router from 'vue-router'
import appRouter from './router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: appRouter
})
