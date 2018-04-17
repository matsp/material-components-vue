<template>
  <m-layout-grid-inner>
    <m-layout-grid-cell :span="12">
      <m-typo-title>Normal</m-typo-title>
      <m-layout-grid-inner>
        <m-layout-grid-cell :span="3">
          <m-button
            raised
            interactive
            @click="isSnackbarOpen=true">open</m-button>
          <m-snackbar
            :options="options"
            v-model="isSnackbarOpen"/>
        </m-layout-grid-cell>
      </m-layout-grid-inner>
    </m-layout-grid-cell>
    <m-layout-grid-cell :span="12">
      <m-typo-title>AlignStart</m-typo-title>
      <m-layout-grid-inner>
        <m-layout-grid-cell :span="2">
          <m-button
            raised
            interactive
            @click="isSnackbar2Open=true">open</m-button>
          <m-snackbar
            align-start
            :options="options"
            v-model="isSnackbar2Open"/>
        </m-layout-grid-cell>
      </m-layout-grid-inner>
    </m-layout-grid-cell>
  </m-layout-grid-inner>
</template>

<script>
import Vue from 'vue'
import Button from '../../dist/button'
import Snackbar from '../../dist/snackbar'

Vue.use(Button)
Vue.use(Snackbar)

export default {
  data () {
    return {
      isSnackbarOpen: false,
      isSnackbar2Open: false,
      options: {
        message: 'I am a snackbar!',
        timeout: 3000,
        actionHandler: () => console.log('snackbar action'),
        actionText: 'ok',
        multiline: false,
        actionOnBottom: false
      }
    }
  }
}
</script>

<style lang="scss">
@import "../../dist/button/styles";
@import "../../dist/snackbar/styles";
</style>
