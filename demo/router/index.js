import Vue from 'vue'
import VueRouter from 'vue-router'

import buttonRoute from 'routes/buttonRoute'
import cardRoute from 'routes/cardRoute'
import checkboxRoute from 'routes/checkboxRoute'
import iconToggleRoute from 'routes/iconToggleRoute'
import textfieldRoute from 'routes/textfieldRoute'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    buttonRoute,
    cardRoute,
    checkboxRoute,
    iconToggleRoute,
    textfieldRoute
  ]
})
