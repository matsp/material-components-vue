<template>
  <m-layout-grid-inner>
    <m-layout-grid-cell :span="12">
      <m-typo-headline :level="5">Normal</m-typo-headline>
      <m-layout-grid-inner>
        <m-layout-grid-cell :span="1">
          <m-form-field align-end>
            <m-radio
              v-model="radio"
              id="radio"/>
            <label for="radio"> Radio </label>
          </m-form-field>
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="1">
          <m-form-field align-end>
            <m-radio
              v-model="radio2"
              id="radio2"/>
            <label for="radio2"> Radio 2 </label>
          </m-form-field>
        </m-layout-grid-cell>
      </m-layout-grid-inner>
    </m-layout-grid-cell>
    <m-layout-grid-cell :span="12">
      <m-typo-headline :level="5">Disabled</m-typo-headline>
      <m-layout-grid-inner>
        <m-layout-grid-cell :span="1">
          <m-form-field align-end>
            <m-radio
              disabled
              id="disabled"
              :checked="true"/>
            <label for="disabled"> Disabled </label>
          </m-form-field>
        </m-layout-grid-cell>
      </m-layout-grid-inner>
    </m-layout-grid-cell>
  </m-layout-grid-inner>
</template>

<script>
import Vue from 'vue'
import FormField from '../../dist/form-field'
import Radio from '../../dist/radio'

Vue.use(FormField)
Vue.use(Radio)

export default {
  data () {
    return {
      radio: true,
      radio2: false
    }
  },
  watch: {
    radio () {
      this.radio ? this.radio2 = false : this.radio = false
    },
    radio2 () {
      this.radio2 ? this.radio = false : this.radio2 = false
    }
  }
}
</script>

<style lang="scss">
@import "../../dist/form-field/styles";
@import "../../dist/radio/styles";
</style>
