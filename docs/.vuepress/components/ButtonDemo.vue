<template>
<div>
  <ComponentSection>
    <m-button
      :raised="radioProps[1].value"
      :dense="checkboxProps[2].value"
      :unelevated="radioProps[2].value"
      :outlined="radioProps[3].value"
      :disabled="checkboxProps[1].value"
      :ripple="checkboxProps[4].value">
      <m-icon
        v-if="checkboxProps[0].value"
        icon="cloud"
        slot="icon"/>
      Button
      <m-icon
              v-if="checkboxProps[3].value"
              icon="cloud"
              slot="trailingIcon"/>
    </m-button>
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
        { prop: 'baseline', value: false},
        { prop: 'raised', value: true },
        { prop: 'unelevated', value: false },
        { prop: 'outlined', value: false }
      ],
      checkboxProps: [
        { prop: 'icon', value: false },
        { prop: 'disabled', value: false },
        { prop: 'dense', value: false },
        { prop: 'trailingIcon', value: false },
        { prop: 'ripple', value: true }
      ]
    }
  } 
}
</script>
