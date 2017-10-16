<template>
  <header>
    <m-toolbar title="Demo" fixed waterfall @clicked="showDrawer" />
    <aside>
      <m-temporary-drawer ref="drawer" primaryToolbarSpacer>
        <span slot="toolbarSpacer"> Spacer </span>
        <span slot="drawerHeader">Menu</span>
        <m-temporary-drawer-item v-for="item in listItems" :key="item.text" :startIcon="item.icon" @click="openRoute(item.route)">
            {{item.text}}
        </m-temporary-drawer-item>
        <m-drawer-item-divider />
      </m-temporary-drawer>
    </aside>
  </header>
</template>

<script>

export default {
  data() {
    return {
      drawerVisible: false
    }
  },
  methods: {
    showDrawer() {
      this.$refs.drawer.show()
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