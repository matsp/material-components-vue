<template>
  <header>
    <toolbar title="Example" :modifier="['fixed', 'waterfall']" v-on:toggleDrawer="toggleDrawer" />
    <aside>
      <temporary-drawer :visible="drawerVisible" v-on:toggleDrawer="toggleDrawer">
        <span slot="header">Example</span>
        <list slot="content">
          <drawer-list-item v-for="item in listItems" :key="item.title" :item="item" v-on:toggleDrawer="toggleDrawer" />
        </list>
      </temporary-drawer>
    </aside>
  </header>
</template>

<script>
import Toolbar from 'components/Toolbar'
import TemporaryDrawer from 'components/TemporaryDrawer'
import List from 'components/List'
import DrawerListItem from 'components/DrawerListItem'

export default {
  name: 'top-panel',
  components: { Toolbar, TemporaryDrawer, List, DrawerListItem },
  data() {
    return {
      drawerVisible: false
    }
  },
  methods: {
    toggleDrawer() {
      this.drawerVisible ? this.drawerVisible = false : this.drawerVisible = true
    }
  },
  computed: {
    listItems() {
      return this.$store.getters.getDrawerListItems
    }
  }
}
</script>
