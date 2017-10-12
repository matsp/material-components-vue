import Body from './Body'
import Button from './Button'
import Caption from './Caption'
import Display from './Display'
import Headline from './Headline'
import Title from './Title'
import Subheading from './Subheading'
import Typography from './Typography'

export { Body, Button, Caption, Display, Headline, Title, Subheading, Typography }

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
