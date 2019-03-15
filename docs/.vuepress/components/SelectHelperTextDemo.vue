<template>
    <div>
        <ComponentSection>
            <div>
                <m-select :required="checkboxProps[2].value" :valid="checkboxProps[3].value"
                          aria-describedby="select_helper_text" id="select_helper_text_demo">
                    <template slot="default">
                        <option value="apple">Apple</option>
                        <option value="orange">Orange</option>
                        <option value="banana">Banana</option>
                    </template>
                    <m-floating-label for="select_helper_text_demo" id="select_helper_text_demo_label" slot="label">
                        Fruit
                    </m-floating-label>
                    <m-line-ripple slot="line"/>
                </m-select>
                <m-select-helper-text :persistent="checkboxProps[1].value" :validation-msg="checkboxProps[0].value"
                                      id="select_helper_text">
                    Helper Text
                </m-select-helper-text>
            </div>
        </ComponentSection>
        <ComponentProps
                :checkboxProps="checkboxProps"
                :radioProps="radioProps"/>
    </div>
</template>

<script>
  export default {
    name: 'SelectHelperTextDemo',
    data () {
      return {
        radioProps: [],
        checkboxProps: [
          { prop: 'validationMsg', value: false },
          { prop: 'persistent', value: false },
          { prop: 'required', value: false },
          { prop: 'valid', value: true }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
