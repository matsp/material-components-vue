<template>
  <m-layout-grid-inner>
    <m-layout-grid-cell :span="12">
      <m-typo-headline :level="5">Normal</m-typo-headline>
      <m-layout-grid-inner>
        <m-layout-grid-cell :span="4">
          <m-menu-anchor>
            <m-button
              raised
              interactive
              @click="isMenuOpen=true">open</m-button>
            <m-menu v-model="isMenuOpen">
              <m-list>
                <m-list-item interactive>
                  Entry 1
                </m-list-item>
                <m-list-divider/>
                <m-list-item interactive>
                  Entry 2
                </m-list-item>
              </m-list>
            </m-menu>
          </m-menu-anchor>
        </m-layout-grid-cell>
      </m-layout-grid-inner>
    </m-layout-grid-cell>
    <m-layout-grid-cell :span="12">
      <m-typo-headline :level="5">QuickOpen</m-typo-headline>
      <m-layout-grid-inner>
        <m-layout-grid-cell :span="4">
          <m-menu-anchor>
            <m-button
              raised
              interactive
              @click="isMenu2Open=true">open</m-button>
            <m-menu
              quick-open
              v-model="isMenu2Open">
              <m-list>
                <m-list-item interactive>
                  Entry 1
                </m-list-item>
                <m-list-divider/>
                <m-list-item interactive>
                  Entry 2
                </m-list-item>
              </m-list>
            </m-menu>
          </m-menu-anchor>
        </m-layout-grid-cell>
      </m-layout-grid-inner>
    </m-layout-grid-cell>
  </m-layout-grid-inner>
</template>

<script>
import Vue from 'vue'
import Button from '../../dist/button'
import List from '../../dist/list'
import Menu from '../../dist/menu'

Vue.use(Button)
Vue.use(List)
Vue.use(Menu)

export default {
  data () {
    return {
      isMenuOpen: false,
      isMenu2Open: false
    }
  }
}
</script>

<style lang="scss">
@import "../../dist/button/styles";
@import "../../dist/list/styles";
@import "../../dist/menu/styles";
</style>
