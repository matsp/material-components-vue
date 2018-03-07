<template>
  <m-layout-grid-inner>
    <m-layout-grid-cell :span="12">
      <m-typo-display :level="1">Drawer</m-typo-display>
      <m-typo-body :level="2">
        <a href="https://github.com/matsp/material-components-vue/blob/master/components/drawer">
          https://github.com/matsp/material-components-vue/blob/master/components/drawer
        </a>
      </m-typo-body>
    </m-layout-grid-cell>
    <m-layout-grid-cell :span="12">
      <m-typo-headline>PermanentDrawer</m-typo-headline>
      <m-drawer-permanent>
        <m-drawer-toolbar-spacer slot="toolbarSpacer" />
        <m-drawer-content>
          <m-list>
            <m-list-item> Item </m-list-item>
            <m-list-divider />
            <m-list-item> Item 2 </m-list-item>
          </m-list>
        </m-drawer-content>
      </m-drawer-permanent>
    </m-layout-grid-cell>
    <m-layout-grid-cell :span="12">
      <m-typo-headline>PersistentDrawer</m-typo-headline>
      <m-button
        interactive
        raised
        @click="$refs.persistentDrawer.toggle()">toggle</m-button>
      <m-drawer-persistent ref="persistentDrawer">
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
    <m-layout-grid-cell :span="12">
      <m-typo-headline>TemporaryDrawer</m-typo-headline>
      <m-button
        interactive
        raised
        @click="$refs.temporaryDrawer.toggle()">toggle</m-button>
      <m-drawer-temporary ref="temporaryDrawer">
        <m-drawer-content>
          <m-list>
            <m-list-item> Item </m-list-item>
            <m-list-divider />
            <m-list-item> Item 2 </m-list-item>
          </m-list>
        </m-drawer-content>
      </m-drawer-temporary>
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

}
</script>

<styles lang="scss">
@import "../../dist/button/styles";
@import "../../dist/drawer/styles";
@import "../../dist/list/styles";
</styles>
