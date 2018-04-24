<template>
  <m-layout-grid-inner>
    <m-layout-grid-cell :span="12">
      <m-typo-headline :level="5">Normal</m-typo-headline>
      <m-layout-grid-inner>
        <m-layout-grid-cell>
          <m-button
            raised
            @click="isDialogOpen = true">open</m-button>
        </m-layout-grid-cell>
        <m-layout-grid-cell>
          <m-dialog
            v-model="isDialogOpen"
            @accept="accepted = true"
            @cancel="canceled = true">
            <m-typo-headline
              :level="6"
              slot="header">Header</m-typo-headline>
            <span slot="body"> Body </span>
            <m-button slot="acceptButton">Accept</m-button>
            <m-button slot="cancelButton">Cancel</m-button>
            <m-button slot="dialogButton">Anything</m-button>
          </m-dialog>
        </m-layout-grid-cell>
      </m-layout-grid-inner>
    </m-layout-grid-cell>
  </m-layout-grid-inner>
</template>

<script>
import Vue from 'vue'
import Button from '../../dist/button'
import Dialog from '../../dist/dialog'

Vue.use(Button)
Vue.use(Dialog)

export default {
  data () {
    return {
      isDialogOpen: false,
      accepted: false,
      canceled: false
    }
  }
}
</script>

<style lang="scss">
@import "../../dist/button/styles";
@import "../../dist/dialog/styles";
</style>
