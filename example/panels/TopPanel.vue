<template>
  <header>
    <toolbar title="Example" modifier="fixed waterfall" @toggleDrawer="toggleDrawer" />
    <aside>
      <temporary-drawer :visible="drawerVisible" @toggleDrawer="toggleDrawer">
        <span slot="header">Example</span>
        <list slot="content">
          <li slot="items" v-for="item in listItems" :key="item.title" @click="openRoute(item.route)">
            <i class="mdc-list-item__start-detail material-icons">{{item.icon}}</i>{{item.title}}
          </li>
        </list>
      </temporary-drawer>
    </aside>
  </header>
</template>

<script>
import Toolbar from 'components/Toolbar'
import TemporaryDrawer from 'components/TemporaryDrawer'
import List from 'components/List'

export default {
  name: 'top-panel',
  components: { Toolbar, TemporaryDrawer, List },
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
