<template>
  <m-layout-grid-inner>
    <m-layout-grid-cell :span="12">
      <m-typo-title>Normal</m-typo-title>
      <m-layout-grid-inner>
        <m-layout-grid-cell :span="6">
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
