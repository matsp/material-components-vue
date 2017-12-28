<template>
    <m-layout-grid-inner>
         <m-layout-grid-cell :span="12">
            <m-typo-display :level="1">Radio</m-typo-display>
            <m-typo-body :level="2">
                <a href="https://github.com/matsp/material-components-vue/blob/master/components/Radio">
                    https://github.com/matsp/material-components-vue/blob/master/components/Radio
                </a>
            </m-typo-body>
         </m-layout-grid-cell>
        <m-layout-grid-cell :span="1">
             <m-form-field alignEnd>
                <m-radio v-model="radio" id="radio"/>
                <label for="radio"> Radio </label>
             </m-form-field>
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="1">
             <m-form-field alignEnd>
                <m-radio v-model="radio2" id="radio2"/>
                <label for="radio2"> Radio 2 </label>
             </m-form-field>
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="1">
             <m-form-field alignEnd>
                <m-radio disabled id="disabled" :checked="true"/>
                <label for="disabled"> Disabled </label>
             </m-form-field>
        </m-layout-grid-cell>
    </m-layout-grid-inner>
</template>

<script>
export default {
  data () {
    return {
      radio: true,
      radio2: false
    }
  },
  watch: {
      radio() {
          this.radio ? this.radio2 = false : this.radio = false
      },
      radio2() {
          this.radio2 ? this.radio = false : this.radio2 = false
      }
  }
}
</script>
