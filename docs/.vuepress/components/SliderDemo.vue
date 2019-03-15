<template>
    <div>
        <ComponentSection flex-direction="column">
            <m-slider :disabled="checkboxProps[0].value"
                      v-model="value"/>
            <m-slider :disabled="checkboxProps[0].value" discrete
                      v-model="value1"/>
            <m-slider :disabled="checkboxProps[0].value" :step="5" discrete
                      display-markers v-model="value2"/>
        </ComponentSection>
        <ComponentProps
                :checkboxProps="checkboxProps"
                :radioProps="radioProps"/>
    </div>
</template>

<script>
  export default {
    name: 'SliderDemo',
    data () {
      return {
        value: 0,
        value1: 0,
        value2: 0,
        radioProps: [],
        checkboxProps: [
          { prop: 'disabled', value: false }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
