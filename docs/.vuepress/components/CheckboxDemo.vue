<template>
<div>
  <ComponentSection>
    <m-checkbox
      v-model="radioProps[1].value"
      :indeterminate="radioProps[2].value"
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
        { prop: 'baseline', value: true},
        { prop: 'checked', value: false },
        { prop: 'indeterminate', value: false }
      ],
      checkboxProps: [
        { prop: 'disabled', value: false }
      ]
    }
  }
}
</script>
