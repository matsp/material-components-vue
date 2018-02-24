import List from './List.vue'
import ListDivider from './ListDivider.vue'
import ListGroup from './ListGroup.vue'
import ListGroupDivider from './ListGroupDivider.vue'
import ListGroupSubheader from './ListGroupSubheader.vue'
import ListItem from './ListItem.vue'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (vm) {
    vm.component('m-list', List)
    vm.component('m-list-divider', ListDivider)
    vm.component('m-list-group', ListGroup)
    vm.component('m-list-list-group-divider', ListGroupDivider)
    vm.component('m-list-list-group-subheader', ListGroupSubheader)
    vm.component('m-list-item', ListItem)
  }
}
export default plugin

initPlugin(plugin)
