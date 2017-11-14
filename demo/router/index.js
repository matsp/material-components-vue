import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { 
      path: '/button',
      component: () => import('views/ButtonView')
    },
    {
      path: '/card',
      component: () => import('views/CardView')
    },
    {
      path: '/checkbox',
      component: () => import('views/CheckboxView')
    },
    {
      path: '/dialog',
      component: () => import('views/DialogView')
    },
    {
      path: '/iconToggle',
      component: () => import('views/IconToggleView')
    },
    {
      path: '/textfield',
      component: () => import('views/TextfieldView')
    }
  ]
})
