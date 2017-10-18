import Vue from 'vue'
import VueRouter from 'vue-router'

import buttonRoute from 'routes/buttonRoute'
import cardRoute from 'routes/cardRoute'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    buttonRoute,
    cardRoute
  ]
})
