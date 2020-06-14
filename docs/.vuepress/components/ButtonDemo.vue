<template>
  <div>
    <ComponentSection>
      <m-button
        :raised="radioProps[1].value"
        :unelevated="radioProps[2].value"
        :outlined="radioProps[3].value"
        :disabled="checkboxProps[1].value"
        :ripple="checkboxProps[3].value"
      >
        <m-icon
          v-if="checkboxProps[0].value"
          slot="leadingIcon"
          icon="cloud"
        />
        Button
        <m-icon
          v-if="checkboxProps[2].value"
          slot="trailingIcon"
          icon="cloud"
        />
      </m-button>
    </ComponentSection>
    <ComponentProps
      :radio-props="radioProps"
      :checkbox-props="checkboxProps"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      radioProps: [
        { prop: 'baseline', value: false },
        { prop: 'raised', value: true },
        { prop: 'unelevated', value: false },
        { prop: 'outlined', value: false }
      ],
      checkboxProps: [
        { prop: 'leadingIcon', value: false },
        { prop: 'disabled', value: false },
        { prop: 'trailingIcon', value: false },
        { prop: 'ripple', value: true }
      ]
    }
  }
}
</script>
