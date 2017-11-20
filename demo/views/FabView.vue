<template>
    <m-layout-grid-inner>
        <m-layout-grid-cell :span="12">
            <m-typo-display :level="1">Fab</m-typo-display>
            <m-typo-body :level="2">
                <a href="https://github.com/matsp/material-components-vue/blob/master/components/Fab">
                    https://github.com/matsp/material-components-vue/blob/master/components/Fab
                </a>
            </m-typo-body>
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="2">
            <m-typo-headline>Normal</m-typo-headline>
            <m-fab icon="add" interactive />
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="2">
            <m-typo-headline>Mini</m-typo-headline>
            <m-fab icon="add" mini interactive />
        </m-layout-grid-cell>
            <m-fab icon="add" absoluteRight interactive />
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
