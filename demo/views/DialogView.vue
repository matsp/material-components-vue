<template>
  <m-layout-grid-inner>
    <m-layout-grid-cell>
      <m-button
        raised
        @click="openDialog">openDialog</m-button>
    </m-layout-grid-cell>
    <m-layout-grid-cell>
      <m-dialog
        ref="dialog"
        @accepted="dialogAccepted"
        @canceled="dialogCanceled">
        <m-typo-headline slot="header">Header</m-typo-headline>
        <span slot="body"> Body </span>
        <m-button slot="acceptButton">Accept</m-button>
        <m-button slot="cancelButton">Cancel</m-button>
        <m-button slot="dialogButton">Anything</m-button>
      </m-dialog>
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
  methods: {
    openDialog () {
      this.$refs.dialog.show()
    },
    dialogAccepted () {
      console.log('accepted')
    },
    dialogCanceled () {
      console.log('canceled')
    }
  }
}
</script>

<style lang="scss">
@import "../../dist/button/styles";
@import "../../dist/dialog/styles";
</style>
