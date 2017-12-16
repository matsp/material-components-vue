<template>
    <m-layout-grid-inner>
        <m-layout-grid-cell :span="12">
            <m-typo-display :level="1">LinearProgress</m-typo-display>
            <m-typo-body :level="2">
                <a href="https://github.com/matsp/material-components-vue/blob/master/components/LinearProgress">
                    https://github.com/matsp/material-components-vue/blob/master/components/LinearProgress
                </a>
            </m-typo-body>
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="8" class="flex">
            <m-linear-progress ref="progress" open :progress="0.5" :buffer="0.5" indeterminate/>
            <br />
            <m-button @click="stopProgress" raised interactive> Hide </m-button>
            <p />
            <m-button @click="startProgress" stroked> Show </m-button>
        </m-layout-grid-cell>
    </m-layout-grid-inner>
</template>

<script>
export default {
  data () {
    return {
      text: '',
      pw: ''
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
