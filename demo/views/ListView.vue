<template>
  <m-layout-grid-inner>
    <m-layout-grid-cell :span="12">
      <m-typo-display :level="1">List</m-typo-display>
      <m-typo-body :level="2">
        <a href="https://github.com/matsp/material-components-vue/blob/master/components/List">
          https://github.com/matsp/material-components-vue/blob/master/components/List
        </a>
      </m-typo-body>
    </m-layout-grid-cell>
    <m-layout-grid-cell :span="4">
      <m-typo-headline>List</m-typo-headline>
      <m-list>
        <m-list-item interactive> Item #1 (interactive) </m-list-item>
        <m-list-item selected> Item #2 (selected) </m-list-item>
        <m-list-item> Item #3 </m-list-item>
        <m-list-item activated> Item #4 (activated) </m-list-item>
      </m-list>
    </m-layout-grid-cell>
  </m-layout-grid-inner>
</template>
