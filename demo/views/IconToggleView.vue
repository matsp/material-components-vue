<template>
  <m-layout-grid-inner>
    <m-layout-grid-cell :span="12">
      <m-typo-display :level="1">IconToggle</m-typo-display>
      <m-typo-body :level="2">
        <a href="https://github.com/matsp/material-components-vue/blob/master/components/icon-toggle">
          https://github.com/matsp/material-components-vue/blob/master/components/icon-toggle
        </a>
      </m-typo-body>
    </m-layout-grid-cell>
    <m-layout-grid-cell :span="1">
      <m-icon-toggle
        v-model="iconToggle"
        icon-on="favorite"
        icon-off="favorite_border" />
    </m-layout-grid-cell>
    <m-layout-grid-cell :span="1">
      <m-icon-toggle
        v-model="iconToggle"
        icon-on="favorite"
        icon-off="favorite_border" />
    </m-layout-grid-cell>
    <m-layout-grid-cell :span="1">
      <m-icon-toggle
        v-model="iconToggle"
        icon-on="favorite"
        icon-off="favorite_border" />
    </m-layout-grid-cell>
    <m-layout-grid-cell :span="1">
      <m-icon-toggle
        v-model="cloudToggle"
        icon-on="cloud_done"
        icon-off="cloud" />
    </m-layout-grid-cell>
    <m-layout-grid-cell :span="1">
      <m-icon-toggle
        v-model="cloudToggle"
        icon-on="cloud_done"
        icon-off="cloud" />
    </m-layout-grid-cell>
    <m-layout-grid-cell :span="1">
      <m-icon-toggle
        v-model="cloudToggle"
        icon-on="cloud_done"
        icon-off="cloud" />
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
