export default {
  install (vm) {
    vm.component('m-card', () => import('./Card'))
    vm.component('m-card-media-item', () => import('./CardMediaItem'))
  }
}
