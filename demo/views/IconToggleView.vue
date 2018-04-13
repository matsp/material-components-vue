<template>
  <m-layout-grid-inner>
    <m-layout-grid-cell :span="12">
      <m-typo-title>Normal</m-typo-title>
      <m-layout-grid-inner>
        <m-layout-grid-cell :span="1">
          <m-icon-toggle
            v-model="iconToggle"
            icon-on="cloud_done"
            icon-off="cloud"/>
        </m-layout-grid-cell>
      </m-layout-grid-inner>
    </m-layout-grid-cell>
    <m-layout-grid-cell :span="12">
      <m-typo-title>Primary</m-typo-title>
      <m-layout-grid-inner>
        <m-layout-grid-cell :span="1">
          <m-icon-toggle
            v-model="cloudToggle"
            icon-on="cloud_done"
            icon-off="cloud"
            theming="primary"/>
        </m-layout-grid-cell>
      </m-layout-grid-inner>
    </m-layout-grid-cell>
    <m-layout-grid-cell :span="12">
      <m-typo-title>Secondary</m-typo-title>
      <m-layout-grid-inner>
        <m-layout-grid-cell :span="1">
          <m-icon-toggle
            v-model="cloudToggle"
            icon-on="cloud_done"
            icon-off="cloud"
            theming="secondary"/>
        </m-layout-grid-cell>
      </m-layout-grid-inner>
    </m-layout-grid-cell>
  </m-layout-grid-inner>
</template>

<script>
import Vue from 'vue'
import IconToggle from '../../dist/icon-toggle'

Vue.use(IconToggle)

export default {
  data () {
    return {
      iconToggle: false,
      cloudToggle: false
    }
  }
}
</script>

<style lang="scss">
@import "../../dist/icon-toggle/styles";
</style>
