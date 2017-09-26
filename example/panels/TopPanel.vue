<template>
  <header>
    <m-toolbar title="Example" :fixed="true" :waterfall="true" @toggleDrawer="toggleDrawer" />
    <aside>
      <m-temporary-drawer :visible="drawerVisible" @toggleDrawer="toggleDrawer">
        <span slot="drawerHeader">Example</span>
        <m-list-group slot="drawerContent">
          <m-list :dense="true">
            <m-list-item v-for="item in listItems" :key="item.text" @click="openRoute(item.route)">
              <m-icon slot="listItemStartDetail" :icon="item.icon" />
              <label slot="listItemContent"> {{item.text}} </label>
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
    toggleDrawer() {
      this.drawerVisible = !this.drawerVisible
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

<style>
@import '~material-components-vue/dist/material-components-vue.css';
</style>