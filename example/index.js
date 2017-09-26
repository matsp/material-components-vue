import Vue from 'vue'
import router from './router/'
import store from './store/'
import App from './App'

//import MaterialComponentsVue from 'material-components-vue'
import MaterialComponentsVue from '../dist/material-components-vue.min.js'

Vue.use(MaterialComponentsVue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
