<template>
    <div>
        <ComponentSection flex-direction="column">
            <m-select
                    :disabled="checkboxProps[0].value"
                    :outlined="checkboxProps[3].value"
                    :required="checkboxProps[1].value"
                    :valid="checkboxProps[2].value"
                    :enhanced="radioProps[1].value"
                    id="select_demo">
                <m-select-icon icon="favorite" slot="leadingIcon" v-if="checkboxProps[4].value" :clickable="checkboxProps[5].value"></m-select-icon>
                <template slot="default" v-if="!checkboxProps[4].value">
                    <option value="apple">Apple</option>
                    <option value="orange">Orange</option>
                    <option value="banana">Banana</option>
                </template>
                <template slot="default" v-else>
                    <m-list data-value="apple">Apple</m-list>
                    <m-list data-value="orange">Orange</m-list>
                    <m-list data-value="banana">Banana</m-list>
                </template>
                <m-floating-label for="select_demo" id="select_demo_label" slot="label">Fruit</m-floating-label>
                <m-line-ripple slot="line"/>
            </m-select>
            <m-select-helper-text v-if="checkboxProps[6].value" :validation-msg="checkboxProps[8].value" :persistent="checkboxProps[7].value">Helper</m-select-helper-text>
        </ComponentSection>
        <ComponentProps
                :checkboxProps="checkboxProps"
                :radioProps="radioProps"/>
    </div>
</template>

<script>
  export default {
    name: 'SelectDemo',
    data () {
      return {
        radioProps: [
          { prop: 'basic', value: true },
          { prop: 'enhanced', value: false }
        ],
        checkboxProps: [
          { prop: 'disabled', value: false },
          { prop: 'required', value: false },
          { prop: 'valid', value: true },
          { prop: 'outlined', value: false },
          { prop: 'with leading icon', value: false },
          { prop: 'clickable icon', value: false },
          { prop: 'with helper text', value: false },
          { prop: 'persistent helper text', value: false },
          { prop: 'validation message helper text', value: false },
        ]
      }
    }
  }
</script>

<style scoped>

</style>
