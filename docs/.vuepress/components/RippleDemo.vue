<template>
    <div>
        <ComponentSection flex-direction="column">
            <my-button v-if="checkboxProps[0].value" v-ripple.primary="radioProps[0].value"/>
            <my-button v-if="checkboxProps[1].value" v-ripple.accent="radioProps[0].value"/>
        </ComponentSection>
        <ComponentProps
                :checkboxProps="checkboxProps"
                :radioProps="radioProps"/>
    </div>
</template>

<script>
  import MyButton from './ripple/MyButton'
  export default {
    name: 'RippleDemo',
    components: { MyButton },
    data () {
      return {
        radioProps: [
          { prop: 'activate', value: false },
          { prop: 'deactivate', value: true }
        ],
        checkboxProps: [
          { prop: 'primary', value: false },
          { prop: 'accent', value: true }
        ]
      }
    }
  }
</script>

<style lang="scss">
    @import "~@material/ripple/mixins";

</style>