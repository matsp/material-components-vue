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
  install (vm) {
    vm.component('m-typo-body', Body)
    vm.component('m-typo-button', Button)
    vm.component('m-typo-caption', Caption)
    vm.component('m-typo-headline', Headline)
    vm.component('m-typo-overline', Overline)
    vm.component('m-typo-subheading', Subheading)
    vm.component('m-typography', Typography)
  }
}
export default plugin

initPlugin(plugin)
