<template>
  <div>
    <ComponentSection flex-direction="column">
      <m-text-field
        id="text-field1"
        v-model="text"
        :disabled="checkboxProps[1].value"
        :required="checkboxProps[4].value"
        :use-native-validation="checkboxProps[3].value"
        :valid="checkboxProps[2].value"
        :textarea="checkboxProps[0].value"
        :full-width="radioProps[1].value"
        maxlength="10"
      >
        <m-notched-outline v-if="radioProps[2].value">
          <m-floating-label
            v-if="!checkboxProps[5].value"
            id="label"
          >
            Label
          </m-floating-label>
        </m-notched-outline>
        <m-floating-label
          v-if="!checkboxProps[5].value && !radioProps[2].value"
            id="label"
        >
          Label
        </m-floating-label>
        <m-line-ripple
          v-if="radioProps[0].value || radioProps[1].value"
          slot="bottomLine"
        />
      </m-text-field>
    </ComponentSection>
    <ComponentProps
      :checkbox-props="checkboxProps"
      :radio-props="radioProps"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      radioProps: [
        { prop: 'filled', value: true },
        { prop: 'full width', value: false },
        { prop: 'outlined', value: false }
      ],
      checkboxProps: [
        { prop: 'textarea', value: false },
        { prop: 'disabled', value: false },
        { prop: 'valid', value: true },
        { prop: 'useNativeValidation', value: true },
        { prop: 'required', value: true },
        { prop: 'no label', value: false }
      ],
      text: ''
    }
  }
}
</script>
