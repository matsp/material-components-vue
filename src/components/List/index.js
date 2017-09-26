import List from './List'
import ListDivider from './ListDivider'
import ListGroup from './ListGroup'
import ListGroupDivider from './ListGroupDivider'
import ListGroupSubheader from './ListGroupSubheader'
import ListItem from './ListItem'

export { List, ListDivider, ListGroup, ListGroupDivider, ListGroupSubheader, ListItem }

export default {
  install (vm) {
    vm.component('m-list', List)
    vm.component('m-list-divider', ListDivider)
    vm.component('m-list-group', ListGroup)
    vm.component('m-list-list-group-divider', ListGroupDivider)
    vm.component('m-list-list-group-subheader', ListGroupSubheader)
    vm.component('m-list-item', ListItem)
  }
}
