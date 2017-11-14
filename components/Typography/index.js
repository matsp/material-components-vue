export default {
  install (vm) {
    vm.component('m-typo-body', () => import('./Body'))
    vm.component('m-typo-button', () => import('./Button'))
    vm.component('m-typo-caption', () => import('./Caption'))
    vm.component('m-typo-display', () => import('./Display'))
    vm.component('m-typo-headline', () => import('./Headline'))
    vm.component('m-typo-title', () => import('./Title'))
    vm.component('m-typo-subheading', () => import('./Subheading'))
    vm.component('m-typography', () => import('./Typography'))
  }
}
