<template>
  <header>
    <m-toolbar title="Demo" :fixed="true" :waterfall="true" @clicked="showDrawer" />
    <aside>
      <m-temporary-drawer ref="drawer">
        <span slot="drawerHeader">Menu</span>
        <m-list-group slot="drawerContent">
          <m-list>
            <m-list-item v-for="item in listItems" :key="item.text" @click="openRoute(item.route)">
              <m-icon slot="startDetail" :icon="item.icon" />
              {{item.text}}
            </m-list-item>
            <m-list-divider />
          </m-list>
        </m-list-group>
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