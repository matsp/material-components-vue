<template>
    <div>
        <ComponentSection flex-direction="column">
            <my-button v-if="checkboxProps[0].value" v-ripple.primary/>
            <button style="width: 100px; height: 40px; background: deepskyblue; outline: none; border: none; color: white; border-radius: 4px;" v-if="checkboxProps[1].value" v-ripple.accent>BUTTON</button>
            <my-button v-ripple.primary.css-only v-if="checkboxProps[2].value"/>
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
        radioProps: [],
        checkboxProps: [
          { prop: 'primary', value: false },
          { prop: 'accent', value: true },
          { prop: 'css-only', value: false}
        ]
      }
    }
  }
</script>

<style lang="scss">
    @import "~@material/ripple/mixins";

</style>