<template>
    <div>
        <ComponentSection flex-direction="column">
            <m-typography>Filled</m-typography>
            <div style="display: flex">
                <m-text-field
                        :disabled="checkboxProps[0].value"
                        :focused="checkboxProps[2].value"
                        :required="checkboxProps[5].value"
                        :upgraded="checkboxProps[1].value"
                        :use-native-validation="checkboxProps[4].value"
                        :valid="checkboxProps[3].value"
                        id="text-field1"
                        style="flex: 1; margin: 2px"
                >
                    <m-floating-label
                            for="text-field1">Label
                    </m-floating-label>
                    <m-line-ripple slot="bottomLine"/>
                </m-text-field>
                <m-text-field
                        :disabled="checkboxProps[0].value"
                        :focused="checkboxProps[2].value"
                        :required="checkboxProps[5].value"
                        :upgraded="checkboxProps[1].value"
                        :use-native-validation="checkboxProps[4].value"
                        :valid="checkboxProps[3].value"
                        id="text-field1-lead"
                        style="flex: 1; margin: 2px"

                >
                    <m-icon icon="event" slot="leadingIcon"></m-icon>
                    <m-floating-label
                            for="text-field1-lead">Label
                    </m-floating-label>
                    <m-line-ripple slot="bottomLine"/>
                </m-text-field>
                <m-text-field
                        :disabled="checkboxProps[0].value"
                        :focused="checkboxProps[2].value"
                        :required="checkboxProps[5].value"
                        :upgraded="checkboxProps[1].value"
                        :use-native-validation="checkboxProps[4].value"
                        :valid="checkboxProps[3].value"
                        id="text-field1-trail"
                        style="flex: 1; margin: 2px"

                >
                    <m-icon icon="event" slot="trailingIcon"></m-icon>
                    <m-floating-label
                            for="text-field1-trail">Label
                    </m-floating-label>
                    <m-line-ripple slot="bottomLine"/>
                </m-text-field>
            </div>


            <m-typography>Outlined</m-typography>
            <div style="display: flex">
                <m-text-field
                        :disabled="checkboxProps[0].value"
                        :focused="checkboxProps[2].value"
                        :required="checkboxProps[5].value"
                        :upgraded="checkboxProps[1].value"
                        :use-native-validation="checkboxProps[4].value"
                        :valid="checkboxProps[3].value"
                        id="text-field2"
                        outlined
                        style="flex:1; margin: 2px"
                >
                    <m-floating-label
                            for="text-field2">Label
                    </m-floating-label>
                </m-text-field>

                <m-text-field
                        :disabled="checkboxProps[0].value"
                        :focused="checkboxProps[2].value"
                        :required="checkboxProps[5].value"
                        :upgraded="checkboxProps[1].value"
                        :use-native-validation="checkboxProps[4].value"
                        :valid="checkboxProps[3].value"
                        id="text-field2-lead"
                        outlined
                        style="flex:1; margin: 2px"
                >
                    <m-icon icon="event" slot="leadingIcon"></m-icon>
                    <m-floating-label
                            for="text-field2-lead">Label
                    </m-floating-label>
                </m-text-field>

                <m-text-field
                        :disabled="checkboxProps[0].value"
                        :focused="checkboxProps[2].value"
                        :required="checkboxProps[5].value"
                        :upgraded="checkboxProps[1].value"
                        :use-native-validation="checkboxProps[4].value"
                        :valid="checkboxProps[3].value"
                        id="text-field2-trail"
                        outlined
                        style="flex:1; margin: 2px"
                >
                    <m-floating-label
                            for="text-field2-trail">Label
                    </m-floating-label>
                    <m-icon icon="event" slot="trailingIcon"></m-icon>
                </m-text-field>
            </div>

            <m-typography>Full Width</m-typography>
            <m-text-field
                    :disabled="checkboxProps[0].value"
                    :focused="checkboxProps[2].value"
                    :required="checkboxProps[5].value"
                    :upgraded="checkboxProps[1].value"
                    :use-native-validation="checkboxProps[4].value"
                    :valid="checkboxProps[3].value"
                    full-width
                    id="text-field3"
            >
                <m-line-ripple slot="bottomLine"/>
            </m-text-field>

            <m-typography>Textarea</m-typography>
            <m-text-field
                    :disabled="checkboxProps[0].value"
                    :focused="checkboxProps[2].value"
                    :required="checkboxProps[5].value"
                    :upgraded="checkboxProps[1].value"
                    :use-native-validation="checkboxProps[4].value"
                    :valid="checkboxProps[3].value"
                    id="text-field4"
                    textarea
            >
                <m-floating-label
                        for="text-field4">Label
                </m-floating-label>
                <m-line-ripple slot="bottomLine"/>
            </m-text-field>

            <m-typography>Filled without label</m-typography>
            <m-text-field
                    :disabled="checkboxProps[0].value"
                    :focused="checkboxProps[2].value"
                    :required="checkboxProps[5].value"
                    :upgraded="checkboxProps[1].value"
                    :use-native-validation="checkboxProps[4].value"
                    :valid="checkboxProps[3].value"
                    id="text-field5"
            >
                <m-line-ripple slot="bottomLine"/>
            </m-text-field>

            <m-typography>Outlined without label</m-typography>
            <m-text-field
                    :disabled="checkboxProps[0].value"
                    :focused="checkboxProps[2].value"
                    :required="checkboxProps[5].value"
                    :upgraded="checkboxProps[1].value"
                    :use-native-validation="checkboxProps[4].value"
                    :valid="checkboxProps[3].value"
                    id="text-field6"
                    outlined
            >
            </m-text-field>

            <m-typography>Textarea without label</m-typography>
            <m-text-field
                    :disabled="checkboxProps[0].value"
                    :focused="checkboxProps[2].value"
                    :required="checkboxProps[5].value"
                    :upgraded="checkboxProps[1].value"
                    :use-native-validation="checkboxProps[4].value"
                    :valid="checkboxProps[3].value"
                    id="text-field7"
                    textarea
            >
                <m-line-ripple slot="bottomLine"/>
            </m-text-field>

            <m-typography>Filled with Helper Text</m-typography>
            <div>
                <m-text-field
                        :disabled="checkboxProps[0].value"
                        :focused="checkboxProps[2].value"
                        :required="checkboxProps[5].value"
                        :upgraded="checkboxProps[1].value"
                        :use-native-validation="checkboxProps[4].value"
                        :valid="checkboxProps[3].value"
                        aria-controls="helper-text1"
                        aria-describedby="helper-text1"
                        id="text-field8"
                >
                    <m-floating-label
                            for="text-field8">Label
                    </m-floating-label>
                    <m-line-ripple slot="bottomLine"/>
                </m-text-field>
                <m-text-field-helper-text :persistent="checkboxProps[6].value" :validation-msg="checkboxProps[7].value"
                                          id="helper-text1">
                    Helper Text
                </m-text-field-helper-text>
            </div>

            <m-typography>Outlined with Helper Text</m-typography>
            <div>
                <m-text-field
                        :disabled="checkboxProps[0].value"
                        :focused="checkboxProps[2].value"
                        :required="checkboxProps[5].value"
                        :upgraded="checkboxProps[1].value"
                        :use-native-validation="checkboxProps[4].value"
                        :valid="checkboxProps[3].value"
                        aria-controls="helper-text2"
                        aria-describedby="helper-text2"
                        id="text-field9"
                        outlined
                >
                    <m-floating-label
                            for="text-field9">Label
                    </m-floating-label>
                    <m-line-ripple slot="bottomLine"/>
                </m-text-field>
                <m-text-field-helper-text :persistent="checkboxProps[6].value" :validation-msg="checkboxProps[7].value"
                                          id="helper-text2">
                    Helper Text
                </m-text-field-helper-text>
            </div>
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
        radioProps: [],
        checkboxProps: [
          { prop: 'disabled', value: false },
          { prop: 'upgraded', value: false },
          { prop: 'focused', value: false },
          { prop: 'valid', value: true },
          { prop: 'useNativeValidation', value: true },
          { prop: 'required', value: true },
          { prop: 'persistent', value: false },
          { prop: 'validationMsg', value: false }
        ]
      }
    }
  }
</script>
