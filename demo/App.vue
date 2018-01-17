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
            @click="toggleDrawer"/>
          Demo
          <m-form-field
            align-end
            slot="end"
            class="demo-toolbar-row-right">
            <m-switch @change="toggleDarkTheme()"/>
            <label>Dark theme</label>
          </m-form-field>
        </m-toolbar-row>
      </m-toolbar>

      <m-temporary-drawer
        ref="drawer"
        @click="toggleDrawer">
        <span slot="toolbarSpacer" />
        <m-list>
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
  </m-theme>
</template>

<script>
export default {
  data () {
    return {
      material: {
        '--mdc-theme-primary': '#5e35b1',
        '--mdc-theme-primary-light': '#9162e4',
        '--mdc-theme-primary-dark': '#280680',
        '--mdc-theme-secondary': '#ff5722',
        '--mdc-theme-secondary-light': '#ff8a50',
        '--mdc-theme-secondary-dark': '#c41c00',
        '--mdc-theme-background': '#ffffff',
        '--mdc-theme-text-primary-on-primary': '#ffffff',
        '--mdc-theme-text-secondary-on-secondary': '#000000'
      }
    }
  },
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
