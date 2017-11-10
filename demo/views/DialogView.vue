<template>
    <m-layout-grid-inner>
        <m-layout-grid-cell :span="12">
            <m-typo-display :level="1">Dialog</m-typo-display>
                        <m-typo-body :level="2">
                <a href="https://github.com/matsp/material-components-vue/blob/master/components/Dialog">
                    https://github.com/matsp/material-components-vue/blob/master/components/Dialog
                </a>
            </m-typo-body>
         </m-layout-grid-cell>
        <m-layout-grid-cell>
            <m-button raised @click="openDialog">openDialog</m-button>
        </m-layout-grid-cell>
        <m-layout-grid-cell>
            <m-dialog ref="dialog" @accepted="dialogAccepted" @canceled="dialogCanceled">
            <m-typo-headline slot="header">Header</m-typo-headline>
            </span>
            <span slot="body"> Body </span>
            <m-button slot="acceptButton">Accept</m-button>
            <m-button slot="cancelButton">Cancel</m-button>
            <m-button slot="dialogButton">Anything</m-button>
        </m-dialog>
        </m-layout-grid-cell>
    </m-layout-grid-inner>
</template>

<script>
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
