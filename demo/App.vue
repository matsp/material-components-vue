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
        Material Components Vue
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
import Vue from 'vue'
import Drawer from '../dist/drawer'
import Icon from '../dist/icon'
import LayoutGrid from '../dist/layout-grid'
import List from '../dist/list'
import Toolbar from '../dist/toolbar'
import Typography from '../dist/typography'

Vue.use(Drawer)
Vue.use(Icon)
Vue.use(LayoutGrid)
Vue.use(List)
Vue.use(Toolbar)
Vue.use(Typography)

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
$mdc-theme-primary: #5e35b1;
$mdc-theme-secondary: #ff5722;
$mdc-theme-background: #ffffff;

@import "../dist/drawer/styles";
@import "../dist/layout-grid/styles";
@import "../dist/list/styles";
@import "../dist/theme/styles";
@import "../dist/toolbar/styles";
@import "../dist/typography/styles";
@import "~normalize.css/normalize.css";
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

.demo-body {
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
}

.demo-content {
  margin: 0;
  display: inline-flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
  box-sizing: border-box;
}

.demo-toolbar-row-right {
  margin-left: 5px;
  margin-right: 5px;
}

</style>
