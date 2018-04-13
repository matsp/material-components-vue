<template>
  <m-layout-grid-inner>
    <m-layout-grid-cell :span="12">
      <m-typo-title>Normal</m-typo-title>
      <m-layout-grid-inner>
        <m-layout-grid-cell :span="1">
          <m-checkbox v-model="checkboxValue"/>
        </m-layout-grid-cell>
      </m-layout-grid-inner>
    </m-layout-grid-cell>
    <m-layout-grid-cell :span="12">
      <m-typo-title>Indeterminate</m-typo-title>
      <m-layout-grid-inner>
        <m-layout-grid-cell :span="1">
          <m-checkbox
            v-model="checkboxValue"
            indeterminate/>
        </m-layout-grid-cell>
      </m-layout-grid-inner>
    </m-layout-grid-cell>
    <m-layout-grid-cell :span="12">
      <m-typo-title>Disabled</m-typo-title>
      <m-layout-grid-inner>
        <m-layout-grid-cell :span="1">
          <m-checkbox
            v-model="checkboxValue"
            disabled/>
        </m-layout-grid-cell>
      </m-layout-grid-inner>
    </m-layout-grid-cell>
  </m-layout-grid-inner>
</template>

<script>
import Vue from 'vue'
import Checkbox from '../../dist/checkbox'

Vue.use(Checkbox)

export default {
  data () {
    return {
      checkboxValue: false
    }
  }
}
</script>

<style lang="scss">
@import "../../dist/checkbox/styles";
</style>
