<template>
  <m-layout-grid-inner>
    <m-layout-grid-cell :span="12">
      <m-typo-title>Indeterminate</m-typo-title>
      <m-layout-grid-inner>
        <m-layout-grid-cell :span="4">
          <m-linear-progress
            ref="progress"
            open
            :progress="0.5"
            :buffer="0.5"
            indeterminate/>
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="8"/>
        <m-layout-grid-cell :span="1">
          <m-button
            @click="stopProgress"
            raised
            interactive>
            hide
          </m-button>
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="1">
          <m-button
            @click="startProgress"
            stroked>
            show
          </m-button>
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
    }
  },
  methods: {
    stopProgress () {
      this.$refs.progress.hide()
    },
    startProgress () {
      this.$refs.progress.show()
    }
  }
}
</script>

<style lang="scss">
@import "../../dist/button/styles";
@import "../../dist/linear-progress/styles";
</style>
