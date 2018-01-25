<template>
  <m-layout-grid-inner>
    <m-layout-grid-cell :span="12">
      <m-typo-display :level="1">Select</m-typo-display>
      <m-typo-body :level="2">
        <a href="https://github.com/matsp/material-components-vue/blob/master/components/Select">
          https://github.com/matsp/material-components-vue/blob/master/components/Select
        </a>
      </m-typo-body>
    </m-layout-grid-cell>
    <m-layout-grid-cell :span="12">
      <m-select>
        Select
        <m-menu slot="menu">
          <m-list>
            <m-list-item>
              Entry 1
            </m-list-item>
            <m-list-divider />
            <m-list-item>
              Entry 2
            </m-list-item>
          </m-list>
        </m-menu>
      </m-select>
    </m-layout-grid-cell>
  </m-layout-grid-inner>
</template>
