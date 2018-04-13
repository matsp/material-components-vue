<template>
  <m-layout-grid-inner>
    <m-layout-grid-cell
      v-for="n in 24"
      :key="n">
      <m-elevation
        :level="n"
        class="surface">
        <m-typo-body :level="1">Level {{ n }}</m-typo-body>
      </m-elevation>
    </m-layout-grid-cell>
  </m-layout-grid-inner>
</template>

<script>
import Vue from 'vue'
import Elevation from '../../dist/elevation'

Vue.use(Elevation)

export default {

}
</script>

<style lang="scss">
@import "../../dist/elevation/styles";

.surface {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 100px;
  border-radius: 3px;
  font-size: 0.8em;
}
</style>
