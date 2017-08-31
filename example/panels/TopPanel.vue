<template>
  <header>
    <toolbar title="Example" modifier="fixed waterfall" @toggleDrawer="toggleDrawer" />
    <aside>
      <temporary-drawer :visible="drawerVisible" @toggleDrawer="toggleDrawer">
        <span slot="drawerHeader">Example</span>
        <list-group slot="drawerContent">
          <list slot="listGroupContent" modifier="">
            <list-item slot="listContent" v-for="item in listItems" :key="item.text" @click.native="openRoute(item.route)">
              <icon slot="listItemStartDetail" :icon="item.icon" />
              <label slot="listItemContent"> {{item.text}} </label>
            </list-item>
            <list-divider slot="listContent"></list-divider>
          </list>
        </list-group>
      </temporary-drawer>
    </aside>
  </header>
</template>

<script>
import Toolbar from 'components/Toolbar'
import TemporaryDrawer from 'components/TemporaryDrawer'
import List from 'components/List/List'
import ListItem from 'components/List/ListItem'
import ListDivider from 'components/List/ListDivider'
import ListGroup from 'components/List/ListGroup'
import ListGroupSubheader from 'components/List/ListGroupSubheader'
import ListGroupDivider from 'components/List/ListGroupDivider'
import Icon from 'components/Icon'

export default {
  name: 'top-panel',
  components: { Toolbar, TemporaryDrawer, List, ListItem, Icon, ListDivider, ListGroup, ListGroupDivider, ListGroupSubheader },
  data() {
    return {
      drawerVisible: false
    }
  },
  methods: {
    toggleDrawer() {
      this.drawerVisible = !this.drawerVisible
    },
    openRoute(route) {
      this.$router.push(route)
      this.toggleDrawer()
    }
  },
  computed: {
    listItems() {
      return this.$store.getters.getDrawerListItems
    }
  }
}
</script>
