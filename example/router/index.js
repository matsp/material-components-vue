import Vue from 'vue'
import VueRouter from 'vue-router'

import cardRoute from 'routes/cardRoute'
import homeRoute from 'routes/homeRoute'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [cardRoute, homeRoute]
})
