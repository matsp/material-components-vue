<template>
    <div>
        <ComponentSection>
            <m-button :disabled="disabled" @click="onClick" raised>Open Snackbar</m-button>
            <m-snackbar :leading="radioProps[1].value" :stacked="radioProps[2].value" @closed="disabled = false"
                        action-button-text="Retry" has-dismiss
                        label-text="Can't send photo. Retry in 5 seconds." style="z-index: 30" v-model="value"/>
        </ComponentSection>
        <ComponentProps
                :checkboxProps="checkboxProps"
                :radioProps="radioProps"/>
    </div>
</template>

<script>
  export default {
    name: 'SnackbarDemo',
    data () {
      return {
        value: false,
        disabled: false,
        radioProps: [
          { prop: 'baseline', value: true },
          { prop: 'leading', value: false },
          { prop: 'stacked', value: false }
        ],
        checkboxProps: []
      }
    },
    methods: {
      onClick () {
        this.value = true
        this.disabled = true
      }
    }
  }
</script>

<style scoped>
</style>
