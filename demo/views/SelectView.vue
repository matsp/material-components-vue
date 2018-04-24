<template>
  <m-layout-grid-inner>
    <m-layout-grid-cell :span="12">
      <m-typo-headline :level="5">Normal</m-typo-headline>
      <m-layout-grid-inner>
        <m-layout-grid-cell :span="2">
          <m-select v-model="selected">
            <option
              v-for="option in selectOptions"
              :key="option.text"
              :value="option.value"
              :selected="selected === option.value">
              {{ option.text }}
            </option>
            <m-floating-label
              slot="label"
              :float-above="selected !== ''">Pick a food group</m-floating-label>
            <m-line-ripple slot="bottomLine"/>
          </m-select>
        </m-layout-grid-cell>
      </m-layout-grid-inner>
    </m-layout-grid-cell>
    <m-layout-grid-cell :span="12">
      <m-typo-headline :level="5">Box</m-typo-headline>
      <m-layout-grid-inner>
        <m-layout-grid-cell :span="2">
          <m-select
            v-model="selected"
            box>
            <option
              v-for="option in selectOptions"
              :key="option.text"
              :value="option.value"
              :selected="selected === option.value">
              {{ option.text }}
            </option>
            <m-floating-label
              slot="label"
              :float-above="selected !== ''">Pick a food group</m-floating-label>
            <m-line-ripple slot="bottomLine"/>
          </m-select>
        </m-layout-grid-cell>
      </m-layout-grid-inner>
    </m-layout-grid-cell>
  </m-layout-grid-inner>
</template>

<script>
import Vue from 'vue'
import List from '../../dist/list'
import Menu from '../../dist/menu'
import Select from '../../dist/select'
import FloatingLabel from '../../dist/floating-label'
import LineRipple from '../../dist/line-ripple'

Vue.use(List)
Vue.use(Menu)
Vue.use(Select)
Vue.use(FloatingLabel)
Vue.use(LineRipple)

export default {
  data () {
    return {
      selectOptions: [
        { text: 'Bread, Cereal, Rice and Pasta',
          value: 'grains'
        },
        {
          text: 'Vegetables',
          value: 'vegetables'
        },
        {
          text: 'Fruit',
          value: 'fruit'
        }
      ],
      selected: ''
    }
  }
}
</script>

<style lang="scss">
@import "../../dist/list/styles";
@import "../../dist/menu/styles";
@import "../../dist/select/styles";
</style>
