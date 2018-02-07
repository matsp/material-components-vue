<template>
  <m-typography class="demo-body">
    <m-toolbar
      ref="toolbar"
      fixed
      waterfall>
      <m-toolbar-row shrink-center>
        <m-toolbar-icon
          slot="start"
          icon="menu"
          menu-icon
          @click="toggleDrawer()"/>
        Material Components Vue - Demonstration
      </m-toolbar-row>
    </m-toolbar>
    <m-temporary-drawer ref="drawer">
      <!-- <span slot="toolbarSpacer"/> -->
      <span
        class="mdc-theme--primary"
        slot="header">
        <m-typo-headline>
          Components
        </m-typo-headline>
      </span>
      <m-list dense>
        <m-list-item
          v-for="item in listItems"
          :key="item.text"
          @click="openRoute(item.route)">
          <m-icon
            slot="graphic"
            :icon="item.icon"/>
          {{ item.text }}
        </m-list-item>
      </m-list>
    </m-temporary-drawer>
    <div class="demo-content">
      <m-toolbar-fixed-adjust>
        <main>
          <m-layout-grid>
            <keep-alive>
              <router-view />
            </keep-alive>
          </m-layout-grid>
        </main>
      </m-toolbar-fixed-adjust>
    </div>
  </m-typography>
</template>

<script>
export default {
  computed: {
    listItems () {
      return this.$store.state.app.drawerListItems
    }
  },
  methods: {
    toggleDrawer () {
      this.$refs.drawer.toggle()
    },
    openRoute (route) {
      this.$router.push(route)
      this.toggleDrawer()
    }
  }
}
</script>

<style lang="scss">
@import "styles/demo";
</style>
