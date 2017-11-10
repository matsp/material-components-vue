<template>
    <m-layout-grid-inner>
        <m-layout-grid-cell :span="12">
            <m-typo-display :level="1">Checkbox</m-typo-display>
                        <m-typo-body :level="2">
                <a href="https://github.com/matsp/material-components-vue/blob/master/components/Checkbox">
                    https://github.com/matsp/material-components-vue/blob/master/components/Checkbox
                </a>
            </m-typo-body>
         </m-layout-grid-cell>
        <m-layout-grid-cell :span="1">
            <m-checkbox v-model="checkboxValue" />
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="1">
            <m-checkbox v-model="checkboxValue" disabled />
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="10" />
        <m-layout-grid-cell :span="1">
            <m-checkbox v-model="checkboxValue" indeterminate />
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="1">
            <m-checkbox v-model="checkboxValue" indeterminate disabled />
        </m-layout-grid-cell>
    </m-layout-grid-inner>
</template>

<script>
export default {
  data () {
    return {
      checkboxValue: false
    }
  }
}
</script>
