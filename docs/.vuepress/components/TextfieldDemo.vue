<template>
    <div>
        <ComponentSection flex-direction="column">
            <m-text-field
                    :disabled="checkboxProps[0].value"
                    :focused="checkboxProps[2].value"
                    :required="checkboxProps[5].value"
                    :upgraded="checkboxProps[1].value"
                    :use-native-validation="checkboxProps[4].value"
                    :valid="checkboxProps[3].value"
                    :outlined="radioProps[2].value"
                    :textarea="radioProps[3].value"
                    :full-width="radioProps[1].value"
                    v-model="text"
                    id="text-field1"
            >
                <m-text-field-icon icon="favorite" slot="leadingIcon" v-if="checkboxProps[8].value" :clickable="checkboxProps[10].value"></m-text-field-icon>
                <m-floating-label v-if="!checkboxProps[11].value || radioProps[1].value"
                        for="text-field1">Label
                </m-floating-label>
                <m-text-field-icon icon="favorite" slot="trailingIcon" v-if="checkboxProps[9].value" :clickable="checkboxProps[10].value"></m-text-field-icon>
                <m-line-ripple slot="bottomLine" v-if="radioProps[0].value || radioProps[1].value"/>
            </m-text-field>
        </ComponentSection>
        <ComponentProps
                :checkboxProps="checkboxProps"
                :radioProps="radioProps"/>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        radioProps: [
          { prop: 'basic', value: true },
          { prop: 'fullwidth', value: false },
          { prop: 'outlined', value: false },
          { prop: 'textarea', value: false }
        ],
        checkboxProps: [
          { prop: 'disabled', value: false },
          { prop: 'upgraded', value: false },
          { prop: 'focused', value: false },
          { prop: 'valid', value: true },
          { prop: 'useNativeValidation', value: true },
          { prop: 'required', value: true },
          { prop: 'persistent', value: false },
          { prop: 'validationMsg', value: false },
          { prop: 'with leading icon', value: false },
          { prop: 'with trailing icon', value: false },
          { prop: 'clickable icon', value: false },
          { prop: 'no label', value: false }
        ],
        text: ''
      }
    }
  }
</script>
