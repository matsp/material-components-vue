<template>
<div>
  <ComponentSection>
    <m-checkbox
      v-model="checkboxProps[2].value"
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
      radioProps: [],
      checkboxProps: [
        { prop: 'disabled', value: false },
        { prop: 'indeterminate', value: false },
        { prop: 'checked', value: false }
      ]
    }
  }
}
</script>