import List from './List.vue'
import ListDivider from './ListDivider.vue'
import ListGroup from './ListGroup.vue'
import ListGroupDivider from './ListGroupDivider.vue'
import ListGroupSubheader from './ListGroupSubheader.vue'
import ListItem from './ListItem.vue'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (Vue) {
    Vue.component('m-list', List)
    Vue.component('m-list-divider', ListDivider)
    Vue.component('m-list-group', ListGroup)
    Vue.component('m-list-group-divider', ListGroupDivider)
    Vue.component('m-list-group-subheader', ListGroupSubheader)
    Vue.component('m-list-item', ListItem)
  }
}
export default plugin

initPlugin(plugin)
