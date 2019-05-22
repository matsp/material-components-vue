<template>
    <div>
        <ComponentSection flex-direction="column">
            <m-typography>Filled</m-typography>
            <m-select :disabled="checkboxProps[0].value" :required="checkboxProps[1].value"
                      :valid="checkboxProps[2].value" id="select_demo">
                <m-select-icon :clickable="checkboxProps[3].value" class="material-icons" slot="leadingIcon">search</m-select-icon>
                <template slot="default">
                    <option value="apple">Apple</option>
                    <option value="orange">Orange</option>
                    <option value="banana">Banana</option>
                </template>
                <m-floating-label for="select_demo" id="select_demo_label" slot="label">Fruit</m-floating-label>
                <m-line-ripple slot="line"/>
            </m-select>
            <m-typography>Outlined</m-typography>
            <m-select :disabled="checkboxProps[0].value" :required="checkboxProps[1].value"
                      :valid="checkboxProps[2].value" id="select_demo2" outlined>
                <m-select-icon :clickable="checkboxProps[3].value" class="material-icons" slot="leadingIcon">search</m-select-icon>
                <template slot="default">
                    <option value="apple">Apple</option>
                    <option value="orange">Orange</option>
                    <option value="banana">Banana</option>
                </template>
                <m-floating-label for="select_demo2" id="select_demo2_label" slot="label">Fruit</m-floating-label>
                <m-line-ripple slot="line"/>
            </m-select>
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
        radioProps: [],
        checkboxProps: [
          { prop: 'disabled', value: false },
          { prop: 'required', value: false },
          { prop: 'valid', value: true },
          { prop: 'clickable', value: false}
        ]
      }
    }
  }
</script>

<style scoped>

</style>
