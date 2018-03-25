<template>
  <m-layout-grid-inner>
    <m-layout-grid-cell :span="12">
      <m-typo-display :level="1">Button</m-typo-display>
      <m-typo-body :level="2">
        <a href="https://github.com/matsp/material-components-vue/blob/master/components/button">
          https://github.com/matsp/material-components-vue/blob/master/components/button
        </a>
      </m-typo-body>
    </m-layout-grid-cell>
    <m-layout-grid-cell :span="12">
      <m-typo-headline>Text</m-typo-headline>
      <m-layout-grid-inner>
        <m-layout-grid-cell :span="3">
          <m-button>text</m-button>
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="3">
          <m-button interactive>interactive</m-button>
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="3">
          <m-button>
            <m-icon
              slot="icon"
              icon="cloud"/>
            icon
          </m-button>
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="3">
          <m-button dense>dense</m-button>
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="3">
          <m-button disabled>disabled</m-button>
        </m-layout-grid-cell>
      </m-layout-grid-inner>
    </m-layout-grid-cell>
    <m-layout-grid-cell :span="12">
      <m-typo-headline>Raised</m-typo-headline>
      <m-layout-grid-inner>
        <m-layout-grid-cell :span="3">
          <m-button raised>text</m-button>
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="3">
          <m-button
            raised
            interactive>
            interactive
          </m-button>
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="3">
          <m-button raised>
            <m-icon
              slot="icon"
              icon="cloud"/>
            icon
          </m-button>
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="3">
          <m-button
            raised
            dense>
            dense
          </m-button>
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="3">
          <m-button
            raised
            disabled>
            disabled
          </m-button>
        </m-layout-grid-cell>
      </m-layout-grid-inner>
    </m-layout-grid-cell>
    <m-layout-grid-cell :span="12">
      <m-typo-headline>Unelevated</m-typo-headline>
      <m-layout-grid-inner>
        <m-layout-grid-cell :span="3">
          <m-button unelevated>text</m-button>
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="3">
          <m-button
            unelevated
            interactive>
            interactive
          </m-button>
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="3">
          <m-button unelevated>
            <m-icon
              slot="icon"
              icon="cloud"/>
            icon
          </m-button>
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="3">
          <m-button
            unelevated
            dense>
            dense
          </m-button>
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="3">
          <m-button
            unelevated
            disabled>
            disabled
          </m-button>
        </m-layout-grid-cell>
      </m-layout-grid-inner>
    </m-layout-grid-cell>
    <m-layout-grid-cell :span="12">
      <m-typo-headline>Stroked</m-typo-headline>
      <m-layout-grid-inner>
        <m-layout-grid-cell :span="3">
          <m-button stroked>text</m-button>
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="3">
          <m-button
            stroked
            interactive>
            interactive
          </m-button>
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="3">
          <m-button stroked>
            <m-icon
              slot="icon"
              icon="cloud"/>
            icon
          </m-button>
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="3">
          <m-button
            stroked
            dense>
            dense
          </m-button>
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="3">
          <m-button
            stroked
            disabled>
            disabled
          </m-button>
        </m-layout-grid-cell>
      </m-layout-grid-inner>
    </m-layout-grid-cell>
  </m-layout-grid-inner>
</template>

<script>
import Vue from 'vue'
import Button from '../../dist/button'
Vue.use(Button)

export default {
}
</script>

<style lang="scss">
@import "../../dist/button/styles"
</style>
