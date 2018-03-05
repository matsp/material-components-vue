<template>
  <m-layout-grid-inner>
    <m-layout-grid-cell :span="12">
      <m-typo-display :level="1">Fab</m-typo-display>
      <m-typo-body :level="2">
        <a href="https://github.com/matsp/material-components-vue/blob/master/components/fab">
          https://github.com/matsp/material-components-vue/blob/master/components/fab
        </a>
      </m-typo-body>
    </m-layout-grid-cell>
    <m-layout-grid-cell :span="2">
      <m-typo-headline>Normal</m-typo-headline>
      <m-fab interactive>
        <m-icon icon="add"/>
      </m-fab>
    </m-layout-grid-cell>
    <m-layout-grid-cell :span="2">
      <m-typo-headline>Mini</m-typo-headline>
      <m-fab
        mini
        interactive>
        <m-icon icon="add"/>
      </m-fab>
    </m-layout-grid-cell>
    <m-fab
      absolute-right
      interactive>
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

.surface {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 100px;
  border-radius: 3px;
  font-size: 0.8em;
}
</style>
