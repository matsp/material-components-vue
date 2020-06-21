<template>
  <div>
    <ComponentSection
      flex-direction="column"
      :centering-contents="false"
    >
      <m-text-field
        id="text-field1"
        v-model="text"
        :disabled="checkboxProps[1].value"
        :required="checkboxProps[4].value"
        :use-native-validation="checkboxProps[3].value"
        :valid="checkboxProps[2].value"
        :textarea="checkboxProps[0].value"
        :full-width="radioProps[1].value"
        :prefix-text="checkboxProps[11].value ? '$' : ''"
        :suffix-text="checkboxProps[12].value ? '.00' : ''"
        :end-align="checkboxProps[13].value"
        maxlength="10"
      >
        <div
          v-if="checkboxProps[8].value"
          slot="characterCounter"
          class="mdc-text-field-character-counter"
        />
        <i
          v-if="checkboxProps[6].value"
          slot="leadingIcon"
          class="material-icons"
          tabindex="0"
          role="button"
        >event</i>
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
        <i
          v-if="checkboxProps[7].value"
          slot="trailingIcon"
          class="material-icons mdc-text-field__icon mdc-text-field__icon--trailing"
          tabindex="0"
          role="button"
        >event</i>
        <m-line-ripple
          v-if="radioProps[0].value || radioProps[1].value"
          slot="bottomLine"
        />
      </m-text-field>
      <div
        v-if="checkboxProps[9].value || checkboxProps[10].value"
        class="mdc-text-field-helper-line"
      >
        <div
          v-if="checkboxProps[10].value"
          id="my-helper-id"
          class="mdc-text-field-helper-text"
          aria-hidden="true"
        >
          helper text
        </div>
        <div
          v-if="checkboxProps[9].value"
          class="mdc-text-field-character-counter"
        >
          0 / 10
        </div>
      </div>
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
        { prop: 'no label', value: false },
        { prop: 'with leading icon', value: false },
        { prop: 'with trailing icon', value: false },
        { prop: 'internal character counter', value: false },
        { prop: 'character counter', value: false },
        { prop: 'helper text', value: false },
        { prop: 'prefix', value: false },
        { prop: 'suffix', value: false },
        { prop: 'end align', value: false }
      ],
      text: '100'
    }
  }
}
</script>
