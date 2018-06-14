<template>
<div>
  <ComponentSection>
    <m-checkbox
      v-model="radioProps[1].value"
      :indeterminate="checkboxProps[1].value"
      :disabled="checkboxProps[0].value"/>
  </ComponentSection>
  <ComponentProps
    :radioProps="radioProps"
    :checkboxProps="checkboxProps"/>
</div>
</template>

<script>
export default {
  data () {
    return {
      radioProps: [
        { prop: 'baseline', value: true },
        { prop: 'checked', value: false }
      ],
      checkboxProps: [
        { prop: 'disabled', value: false },
        { prop: 'indeterminate', value: false }
      ]
    }
  }
}
</script>
