import 'babel-polyfill'

import Vue from 'vue'
import router from './router/'
import store from './store/'
import App from './App'

// import MaterialComponentsVue from '../components/index.js'
import Button from '../dist/button/mcv-button.js'
import Card from '../dist/card/mcv-card.js'
import Checkbox from '../dist/checkbox/mcv-checkbox.js'
import Dialog from '../dist/dialog/mcv-dialog.js'
import Drawer from '../dist/drawer/mcv-drawer.js'
import Elevation from '../dist/elevation/mcv-elevation.js'
import Fab from '../dist/fab/mcv-fab.js'
import FormField from '../dist/form-field/mcv-form-field.js'
import IconToggle from '../dist/icon-toggle/mcv-icon-toggle.js'
import Icon from '../dist/icon/mcv-icon.js'
import LayoutGrid from '../dist/layout-grid/mcv-layout-grid.js'
import LineRipple from '../dist/line-ripple/mcv-line-ripple.js'
import LinearProgress from '../dist/linear-progress/mcv-linear-progress.js'
import List from '../dist/list/mcv-list.js'
import Menu from '../dist/menu/mcv-menu.js'
import Radio from '../dist/radio/mcv-radio.js'
import Select from '../dist/select/mcv-select.js'
import Slider from '../dist/slider/mcv-slider.js'
import Textfield from '../dist/textfield/mcv-textfield.js'
import Toolbar from '../dist/toolbar/mcv-toolbar.js'
import Typography from '../dist/typography/mcv-typography.js'

// Vue.use(MaterialComponentsVue)
Vue.use(Button)
Vue.use(Card)
Vue.use(Checkbox)
Vue.use(Dialog)
Vue.use(Drawer)
Vue.use(Elevation)
Vue.use(Fab)
Vue.use(FormField)
Vue.use(IconToggle)
Vue.use(Icon)
Vue.use(LayoutGrid)
Vue.use(LineRipple)
Vue.use(LinearProgress)
Vue.use(List)
Vue.use(Menu)
Vue.use(Radio)
Vue.use(Select)
Vue.use(Slider)
Vue.use(Textfield)
Vue.use(Toolbar)
Vue.use(Typography)





/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
