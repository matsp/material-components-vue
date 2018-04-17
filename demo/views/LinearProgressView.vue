<template>
  <m-layout-grid-inner>
    <m-layout-grid-cell :span="12">
      <m-typo-title>Indeterminate</m-typo-title>
      <m-layout-grid-inner>
        <m-layout-grid-cell :span="4">
          <m-linear-progress
            :open="isProgressOpen"
            :progress="0.5"
            :buffer="0.5"
            indeterminate/>
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="8"/>
        <m-layout-grid-cell :span="1">
          <m-button
            @click="isProgressOpen = !isProgressOpen"
            raised
            interactive>toggle</m-button>
        </m-layout-grid-cell>
      </m-layout-grid-inner>
    </m-layout-grid-cell>
  </m-layout-grid-inner>
</template>

<script>
import Vue from 'vue'
import Button from '../../dist/button'
import LinearProgress from '../../dist/linear-progress'

Vue.use(Button)
Vue.use(LinearProgress)

export default {
  data () {
    return {
      isProgressOpen: true
    }
  }}
</script>

<style lang="scss">
@import "../../dist/button/styles";
@import "../../dist/linear-progress/styles";
</style>
