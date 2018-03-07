<template>
  <m-layout-grid-inner>
    <m-layout-grid-cell :span="12">
      <m-typo-display :level="1">Chips</m-typo-display>
      <m-typo-body :level="2">
        <a href="https://github.com/matsp/material-components-vue/blob/master/components/chips">
          https://github.com/matsp/material-components-vue/blob/master/components/chips
        </a>
      </m-typo-body>
    </m-layout-grid-cell>
    <m-layout-grid-cell :span="12">
      <m-typo-headline>Entry Chips</m-typo-headline>
      <m-chip-set>
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
      <m-typo-headline>Choice Chips</m-typo-headline>
      <m-chip-set choice>
        <m-chip>Chip #1</m-chip>
        <m-chip>Chip #2</m-chip>
        <m-chip>Chip #3</m-chip>
      </m-chip-set>
    </m-layout-grid-cell>
    <m-layout-grid-cell :span="12">
      <m-typo-headline>Filter Chips</m-typo-headline>
      <m-chip-set filter>
        <m-chip>
          Chip #1
          <m-icon
            icon="cancel"
            slot="trailingIcon"/>
        </m-chip>
        <m-chip>
          Chip #2
          <m-icon
            icon="cancel"
            slot="trailingIcon"/>
        </m-chip>
        <m-chip>
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
}
</script>

<style lang="scss">
@import "../../dist/chips/styles";
</style>

