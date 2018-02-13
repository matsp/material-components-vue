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
    <m-drawer-temporary ref="drawer">
      <m-drawer-toolbar-spacer
        class="mdc-theme--primary-bg"
        slot="toolbarSpacer"/>
      <m-drawer-header
        class="mdc-theme--primary"
        slot="header">
        <m-typo-headline>
          Components
        </m-typo-headline>
      </m-drawer-header>
      <m-drawer-content>
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
      </m-drawer-content>
    </m-drawer-temporary>
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
