<template>
  <div id="app">
    <m-typography class="demo-body">
      <!-- drawer -->
      <m-temporary-drawer ref="drawer" primaryToolbarSpacer @click="toggleDrawer">
        <span slot="toolbarSpacer" />
        <m-temporary-drawer-item v-for="item in listItems" :key="item.text" :startIcon="item.icon" @click="openRoute(item.route)">
          {{item.text}}
        </m-temporary-drawer-item>
      </m-temporary-drawer>
      <!-- toolbar -->
      <m-toolbar ref="toolbar" fixedLastRow menuIcon="menu">
        <m-toolbar-row menuIcon="menu" @click="toggleDrawer">
          <span slot="title">Demo</span>
        </m-toolbar-row>
        <m-toolbar-row>
          <span slot="center">2nd row</span>
        </m-toolbar-row>
      </m-toolbar>
      <!-- main -->
      <main class="demo-content">
        <m-toolbar-fixed-adjust>
          <m-layout-grid>
            <keep-alive>
              <router-view />
            </keep-alive>
          </m-layout-grid>
        </m-toolbar-fixed-adjust>
      </main>
    </m-typography>
  </div>
</template>

<script>
export default {
  methods: {
    toggleDrawer() {
      this.$refs.drawer.toggle()
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

<style lang="scss">
$mdc-theme-primary: #2196f3;
$mdc-theme-accent: #ff1744;
$mdc-theme-background: #f5f5f5;
@import '../components/styles.scss';
@import '~normalize.css/normalize.css';
// @import url('https://cdnjs.com/libraries/normalize')
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

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
  display: inline-flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
  box-sizing: border-box;
}
</style>


