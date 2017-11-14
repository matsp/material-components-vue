export default {
  install (vm) {
    vm.component('m-list', () => import('./List'))
    vm.component('m-list-divider', () => import('./ListDivider'))
    vm.component('m-list-group', () => import('./ListGroup'))
    vm.component('m-list-list-group-divider', () => import('./ListGroupDivider'))
    vm.component('m-list-list-group-subheader', () => import('./ListGroupSubheader'))
    vm.component('m-list-item', () => import('./ListItem'))
  }
}
