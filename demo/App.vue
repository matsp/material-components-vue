<template>
  <m-typography class="demo-body">
    <!-- toolbar -->
    <m-toolbar ref="toolbar" fixed waterfall>
      <m-toolbar-row>
        <m-toolbar-icon slot="start" icon="menu" menuIcon @click="toggleDrawer" />
        Demo
      </m-toolbar-row>
    </m-toolbar>
    <!-- toolbar -->

    <!-- drawer -->
    <m-temporary-drawer ref="drawer" primaryToolbarSpacer @click="toggleDrawer">
      <span slot="toolbarSpacer" />
      <m-list>
        <m-list-item v-for="item in listItems" :key="item.text" @click="openRoute(item.route)">
          <m-icon slot="graphic" :icon="item.icon"/>
            {{item.text}}
        </m-list-item>
      </m-list>
    </m-temporary-drawer>
    <!-- drawer -->

    <!-- main -->
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
      <!-- main -->
    </div>
  </m-typography>
</template>

<script>
export default {
  methods: {
    toggleDrawer() {
      this.$refs.drawer.toggle()
    },
    openRoute(route) {
      this.$router.push(route)
    }
  },
  computed: {
    listItems() {
      return this.$store.state.app.drawerListItems
    }
  }
}
</script>

<style lang="scss">
@import "~normalize.css/normalize.css";
// @import url('https://cdnjs.com/libraries/normalize')
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
  display: inline-flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
  box-sizing: border-box;
}
</style>
