<template>
  <m-theme
  :dark="darkTheme">
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
          Material components for Vue.js
          <m-form-field
            align-end
            slot="end"
            class="demo-toolbar-row-right">
            <m-switch @change="toggleDarkTheme()"/>
            <label>Dark theme</label>
          </m-form-field>
        </m-toolbar-row>
      </m-toolbar>

      <m-persistent-drawer
      ref="drawer">
        <span
        slot="toolbarSpacer"/>
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
      </m-persistent-drawer>

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
  </m-theme>
</template>

<script>
export default {
  computed: {
    listItems () {
      return this.$store.state.app.drawerListItems
    },
    darkTheme () {
      return this.$store.state.app.darkTheme
    }
  },
  methods: {
    toggleDrawer () {
      this.$refs.drawer.toggle()
    },
    openRoute (route) {
      this.$router.push(route)
    },
    toggleDarkTheme () {
      this.$store.dispatch('toggleDarkTheme')
    }
  }
}
</script>

<style lang="scss">
@import "styles/demo";
</style>
