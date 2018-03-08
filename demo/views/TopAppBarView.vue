<template>
  <m-layout-grid-inner>
    <m-layout-grid-cell :span="12">
      <m-typo-display :level="1">TopAppBar</m-typo-display>
      <m-typo-body :level="2">
        <a href="https://github.com/matsp/material-components-vue/blob/master/components/top-app-bar">
          https://github.com/matsp/material-components-vue/blob/master/components/top-app-bar
        </a>
      </m-typo-body>
    </m-layout-grid-cell>
    <m-layout-grid-cell :span="8">
      <m-top-app-bar>
        <m-icon
          icon="menu"
          slot="navigation"/>
        <div>Title</div>
        <m-icon
          icon="file_download"
          slot="actions"/>
      </m-top-app-bar>
    </m-layout-grid-cell>
  </m-layout-grid-inner>
</template>

<script>
import Vue from 'vue'
import Icon from '../../dist/icon'
import TopAppBar from '../../dist/top-app-bar'

Vue.use(Icon)
Vue.use(TopAppBar)

export default {

}
</script>

<style lang="scss">
@import "../../dist/top-app-bar/styles";
</style>
