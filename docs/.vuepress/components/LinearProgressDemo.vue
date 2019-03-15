<template>
    <div>
        <ComponentSection>
            <m-linear-progress :buffer="0.7" :indeterminate="checkboxProps[0].value" :open="checkboxProps[2].value"
                               :progress="0.3" :reverse="checkboxProps[1].value"/>
        </ComponentSection>
        <ComponentProps
                :checkboxProps="checkboxProps"
                :radioProps="radioProps"/>
    </div>
</template>

<script>
  export default {
    name: 'LinearProgressDemo',
    data () {
      return {
        radioProps: [],
        checkboxProps: [
          { prop: 'indeterminate', value: false },
          { prop: 'reverse', value: false },
          { prop: 'open', value: true }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
