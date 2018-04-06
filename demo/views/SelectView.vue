<template>
  <m-layout-grid-inner>
    <m-layout-grid-cell :span="12">
      <m-typo-display :level="1">Select</m-typo-display>
      <m-typo-body :level="2">
        <a href="https://github.com/matsp/material-components-vue/blob/master/components/select">
          https://github.com/matsp/material-components-vue/blob/master/components/select
        </a>
      </m-typo-body>
    </m-layout-grid-cell>
    <m-layout-grid-cell :span="3">
      <m-select v-model="selected">
        <option v-for="option in selectOptions" :key="option.text" :value="option.value" :selected="selected === option.value">
          {{ option.text }}
        </option>
        <m-select-label
          slot="label"
          :floatAbove="selected !== ''">Pick a food group</m-select-label> 
        <m-select-bottom-line slot="bottomLine"/>
      </m-select>
    </m-layout-grid-cell>
    <m-layout-grid-cell :span="2">
      <m-select
        v-model="selected"
        box>
        <option v-for="option in selectOptions" :key="option.text" :value="option.value" :selected="selected === option.value">
          {{ option.text }}
        </option>
        <m-select-label
          slot="label"
          :floatAbove="selected !== ''">Pick a food group</m-select-label> 
        <m-select-bottom-line slot="bottomLine"/>
      </m-select>
    </m-layout-grid-cell>
  </m-layout-grid-inner>
</template>

<script>
import Vue from 'vue'
import List from '../../dist/list'
import Menu from '../../dist/menu'
import Select from '../../dist/select'

Vue.use(List)
Vue.use(Menu)
Vue.use(Select)

export default {
  data () {
    return {
      selectOptions:  [
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
