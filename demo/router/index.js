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
      path: '/chips',
      component: () => import('views/ChipsView')
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
      path: '/drawer',
      component: () => import('views/DrawerView')
    },
    {
      path: '/elevation',
      component: () => import('views/ElevationView')
    },
    {
      path: '/fab',
      component: () => import('views/FabView')
    },
    {
      path: '/iconToggle',
      component: () => import('views/IconToggleView')
    },
    {
      path: '/imageList',
      component: () => import('views/ImageListView')
    },
    {
      path: '/linearProgress',
      component: () => import('views/LinearProgressView')
    },
    {
      path: '/list',
      component: () => import('views/ListView')
    },
    {
      path: '/radio',
      component: () => import('views/RadioView')
    },
    {
      path: '/select',
      component: () => import('views/SelectView')
    },
    {
      path: '/textfield',
      component: () => import('views/TextfieldView')
    },
    {
      path: '/topappbar',
      component: () => import('views/TopAppBarView')
    }
  ]
})
