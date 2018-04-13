<template>
  <m-layout-grid-inner>
    <m-layout-grid-cell :span="12">
      <m-typo-title>PermanentDrawer</m-typo-title>
      <m-layout-grid-inner>
        <m-layout-grid-cell>
      <m-drawer-permanent>
        <m-drawer-toolbar-spacer slot="toolbarSpacer" />
        <m-drawer-content>
          <m-list>
            <m-list-item interactive> Item </m-list-item>
            <m-list-divider />
            <m-list-item interactive> Item 2 </m-list-item>
          </m-list>
        </m-drawer-content>
      </m-drawer-permanent>
      </m-layout-grid-cell>
      </m-layout-grid-inner>
    </m-layout-grid-cell>
    <m-layout-grid-cell :span="12">
      <m-typo-title>PersistentDrawer</m-typo-title>
      <m-layout-grid-inner>
        <m-layout-grid-cell>
      <m-button
        interactive
        raised
        @click="togglePersistentDrawer()">
        toggle
      </m-button>
      <m-drawer-persistent v-model="persistentDrawerState">
        <m-drawer-toolbar-spacer slot="toolbarSpacer"/>
        <m-drawer-content>
          <m-list>
            <m-list-item> Item </m-list-item>
            <m-list-divider />
            <m-list-item> Item 2 </m-list-item>
          </m-list>
        </m-drawer-content>
      </m-drawer-persistent>
      </m-layout-grid-cell>
      </m-layout-grid-inner>
    </m-layout-grid-cell>
    <m-layout-grid-cell :span="12">
      <m-typo-title>TemporaryDrawer</m-typo-title>
      <m-layout-grid-inner>
        <m-layout-grid-cell>
      <m-button
        interactive
        raised
        @click="toggleTemporaryDrawer()">
        toggle
      </m-button>
      <m-drawer-temporary v-model="temporaryDrawerState">
        <m-drawer-content>
          <m-list>
            <m-list-item interactive> Item </m-list-item>
            <m-list-divider />
            <m-list-item interactive> Item 2 </m-list-item>
          </m-list>
        </m-drawer-content>
      </m-drawer-temporary>
      </m-layout-grid-cell>
    </m-layout-grid-inner>
    </m-layout-grid-cell>
  </m-layout-grid-inner>
</template>

<script>
import Vue from 'vue'
import Button from '../../dist/button'
import Drawer from '../../dist/drawer'
import List from '../../dist/list'

Vue.use(Button)
Vue.use(Drawer)
Vue.use(List)

export default {
  data () {
    return {
      persistentDrawerState: true,
      temporaryDrawerState: false
    }
  },
  methods: {
    togglePersistentDrawer () {
      this.persistentDrawerState = !this.persistentDrawerState
    },
    toggleTemporaryDrawer () {
      this.temporaryDrawerState = !this.temporaryDrawerState
    }
  }
}
</script>

<styles lang="scss">
@import "../../dist/button/styles";
@import "../../dist/drawer/styles";
@import "../../dist/list/styles";
</styles>
