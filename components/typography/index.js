import Body from './Body.vue'
import Button from './Button.vue'
import Caption from './Caption.vue'
import Headline from './Headline.vue'
import Overline from './Overline.vue'
import Subheading from './Subheading.vue'
import Typography from './Typography.vue'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (Vue) {
    Vue.component('m-typo-body', Body)
    Vue.component('m-typo-button', Button)
    Vue.component('m-typo-caption', Caption)
    Vue.component('m-typo-headline', Headline)
    Vue.component('m-typo-overline', Overline)
    Vue.component('m-typo-subheading', Subheading)
    Vue.component('m-typography', Typography)
  }
}
export default plugin

initPlugin(plugin)
