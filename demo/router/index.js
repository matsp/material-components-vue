import Vue from 'vue'
import VueRouter from 'vue-router'

import homeRoute from 'routes/homeRoute'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [homeRoute]
})
