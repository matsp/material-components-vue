<template>
  <m-layout-grid-inner>
    <m-layout-grid-cell :span="12">
      <m-typo-headline :level="5">Normal</m-typo-headline>
      <m-layout-grid-inner>
        <m-layout-grid-cell :span="2">
          <m-fab interactive>
            <m-icon icon="add"/>
          </m-fab>
        </m-layout-grid-cell>
      </m-layout-grid-inner>
    </m-layout-grid-cell>
    <m-layout-grid-cell :span="12">
      <m-typo-headline :level="5">Mini</m-typo-headline>
      <m-layout-grid-inner>
        <m-layout-grid-cell :span="2">
          <m-fab
            interactive
            mini>
            <m-icon icon="add"/>
          </m-fab>
        </m-layout-grid-cell>
      </m-layout-grid-inner>
    </m-layout-grid-cell>
    <m-fab
      interactive
      absolute-right>
      <m-icon icon="add"/>
    </m-fab>
  </m-layout-grid-inner>
</template>

<script>
import Vue from 'vue'
import Fab from '../../dist/fab'
import Icon from '../../dist/icon'

Vue.use(Fab)
Vue.use(Icon)

export default {

}
</script>

<style lang="scss">
@import "../../dist/fab/styles";
</style>
