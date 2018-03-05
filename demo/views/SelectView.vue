<template>
  <m-layout-grid-inner>
    <m-layout-grid-cell :span="12">
      <m-typo-display :level="1">Select</m-typo-display>
      <m-typo-body :level="2">
        <a href="https://github.com/matsp/material-components-vue/blob/master/components/select">
          https://github.com/matsp/material-components-vue/blob/master/components/select
        </a>
      </m-typo-body>
    </m-layout-grid-cell>
    <m-layout-grid-cell :span="2">
      <m-select>
        Select
        <m-menu slot="menu">
          <m-list>
            <m-list-item>
              Entry 1
            </m-list-item>
            <m-list-divider />
            <m-list-item>
              Entry 2
            </m-list-item>
          </m-list>
        </m-menu>
      </m-select>
    </m-layout-grid-cell>
    <m-layout-grid-cell :span="2">
      <m-select box>
        Select
        <m-menu slot="menu">
          <m-list>
            <m-list-item>
              Entry 1
            </m-list-item>
            <m-list-divider />
            <m-list-item>
              Entry 2
            </m-list-item>
          </m-list>
        </m-menu>
      </m-select>
    </m-layout-grid-cell>
  </m-layout-grid-inner>
</template>

<script>
import Vue from 'vue'
import List from '../../dist/list'
import Menu from '../../dist/menu'
import Select from '../../dist/select'

Vue.use(List)
Vue.use(Menu)
Vue.use(Select)

export default {

}
</script>

<style lang="scss">
@import "../../dist/list/styles";
@import "../../dist/menu/styles";
@import "../../dist/select/styles";
</style>
