<template>
  <m-layout-grid-inner>
    <m-layout-grid-cell :span="12">
      <m-typo-display :level="1">Card</m-typo-display>
      <m-typo-body :level="2">
        <a href="https://github.com/matsp/material-components-vue/blob/master/components/Card">
          https://github.com/matsp/material-components-vue/blob/master/components/Card
        </a>
      </m-typo-body>
    </m-layout-grid-cell>
    <m-layout-grid-cell>
      <m-card primaryAction>
        <m-typo-headline class="demo">
          Title
        </m-typo-headline>
        <m-typo-body
          class="demo"
          :level="1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </m-typo-body>
        <m-button
          interactive
          slot="actionButtons"
          href="https://github.com/matsp/material-components-vue/blob/master/components/Card">
          github
        </m-button>
      </m-card>
    </m-layout-grid-cell>
  </m-layout-grid-inner>
</template>

<style>
 .demo {
   padding: 8px 16px;
 }
</style>
