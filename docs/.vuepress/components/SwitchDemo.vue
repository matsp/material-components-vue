<template>
    <div>
        <ComponentSection>
            <div>
                <m-switch :disabled="checkboxProps[0].value" id="basic-switch" v-model="value"></m-switch>
                <label for="basic-switch">off/on</label>
            </div>
        </ComponentSection>
        <ComponentProps
                :checkboxProps="checkboxProps"
                :radioProps="radioProps"/>
    </div>
</template>

<script>
  export default {
    name: 'SwitchDemo',
    data () {
      return {
        value: false,
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
