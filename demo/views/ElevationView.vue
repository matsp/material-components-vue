<template>
  <m-layout-grid-inner>
    <m-layout-grid-cell :span="12">
      <m-typo-display :level="1">Elevation</m-typo-display>
      <m-typo-body :level="2">
        <a href="https://github.com/matsp/material-components-vue/blob/master/components/Elevation">
          https://github.com/matsp/material-components-vue/blob/master/components/Elevation
        </a>
      </m-typo-body>
    </m-layout-grid-cell>
    <m-layout-grid-cell v-for="n in 24" :key="n">
      <m-elevation :level="n" class="surface">
        <m-typo-body :level="1">Level {{ n }}</m-typo-body>
      </m-elevation>
    </m-layout-grid-cell>
  </m-layout-grid-inner>
</template>

<style>
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
