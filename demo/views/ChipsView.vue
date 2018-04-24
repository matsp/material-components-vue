<template>
  <m-layout-grid-inner>
    <m-layout-grid-cell :span="12">
      <m-typo-title>Input</m-typo-title>
      <m-chip-set input>
        <m-chip>
          <m-icon
            icon="person"
            slot="leadingIcon"/>
          Chip #1
        </m-chip>
        <m-chip>
          Chip #2
          <m-icon
            icon="person"
            slot="leadingIcon"/>
        </m-chip>
        <m-chip>
          Chip #3
          <m-icon
            icon="person"
            slot="leadingIcon"/>
        </m-chip>
      </m-chip-set>
    </m-layout-grid-cell>
    <m-layout-grid-cell :span="12">
      <m-typo-title>Choice</m-typo-title>
      <m-chip-set choice>
        <m-chip v-model="choiceSelected">Chip #1</m-chip>
        <m-chip v-model="choiceSelected">Chip #2</m-chip>
        <m-chip v-model="choiceSelected">Chip #3</m-chip>
      </m-chip-set>
    </m-layout-grid-cell>
    <m-layout-grid-cell :span="12">
      <m-typo-title>Filter</m-typo-title>
      <m-chip-set filter>
        <m-chip v-model="filterSelected">
          Chip #1
          <m-icon
            icon="cancel"
            slot="trailingIcon"/>
        </m-chip>
        <m-chip v-model="filterSelected">
          Chip #2
          <m-icon
            icon="cancel"
            slot="trailingIcon"/>
        </m-chip>
        <m-chip v-model="filterSelected">
          Chip #3
          <m-icon
            icon="cancel"
            slot="trailingIcon"/>
        </m-chip>
      </m-chip-set>
    </m-layout-grid-cell>
  </m-layout-grid-inner>
</template>

<script>
import Vue from 'vue'
import Chips from '../../dist/chips'

Vue.use(Chips)

export default {
  data () {
    return {
      choiceSelected: false,
      filterSelected: false
    }
  }
}
</script>

<style lang="scss">
@import "../../dist/chips/styles";
</style>
