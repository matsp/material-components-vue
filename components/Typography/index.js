import Body from './Body.vue'
import Button from './Button.vue'
import Caption from './Caption.vue'
import Display from './Display.vue'
import Headline from './Headline.vue'
import Title from './Title.vue'
import Subheading from './Subheading.vue'
import Typography from './Typography.vue'

export default {
  install (vm) {
    vm.component('m-typo-body', Body)
    vm.component('m-typo-button', Button)
    vm.component('m-typo-caption', Caption)
    vm.component('m-typo-display', Display)
    vm.component('m-typo-headline', Headline)
    vm.component('m-typo-title', Title)
    vm.component('m-typo-subheading', Subheading)
    vm.component('m-typography', Typography)
  }
}
