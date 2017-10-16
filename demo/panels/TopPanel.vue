<template>
  <header>
    <m-toolbar fixed waterfall menuIcon="menu" @click="showDrawer">Demo</m-toolbar>
    <aside>
      <m-temporary-drawer ref="drawer" primaryToolbarSpacer @click="hideDrawer">
        <span slot="toolbarSpacer" />
        <m-temporary-drawer-item v-for="item in listItems" :key="item.text" :startIcon="item.icon" @click="openRoute(item.route)">
          {{item.text}}
        </m-temporary-drawer-item>
      </m-temporary-drawer>
    </aside>
  </header>
</template>

<script>

export default {
  methods: {
    showDrawer() {
      this.$refs.drawer.show()
    },
    hideDrawer() {
      this.$refs.drawer.hide()
    },
    openRoute(route) {
      this.$router.push(route)
      this.$refs.drawer.hide()
    }
  },
  computed: {
    listItems() {
      return this.$store.getters.getDrawerListItems
    }
  }
}
</script>