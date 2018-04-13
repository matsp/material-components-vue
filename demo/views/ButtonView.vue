<template>
  <m-layout-grid-inner>
    <m-layout-grid-cell :span="12">
      <m-typo-title>Text</m-typo-title>
      <m-layout-grid-inner>
        <m-layout-grid-cell :span="2">
          <m-button>baseline</m-button>
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="2">
          <m-button interactive>interactive</m-button>
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="2">
          <m-button>
            <m-icon
              slot="icon"
              icon="cloud"/>
            icon
          </m-button>
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="2">
          <m-button dense>dense</m-button>
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="2">
          <m-button disabled>disabled</m-button>
        </m-layout-grid-cell>
      </m-layout-grid-inner>
    </m-layout-grid-cell>
    <m-layout-grid-cell :span="12">
      <m-typo-title>Raised</m-typo-title>
      <m-layout-grid-inner>
        <m-layout-grid-cell :span="2">
          <m-button raised>baseline</m-button>
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="2">
          <m-button
            raised
            interactive>
            interactive
          </m-button>
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="2">
          <m-button raised>
            <m-icon
              slot="icon"
              icon="cloud"/>
            icon
          </m-button>
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="2">
          <m-button
            raised
            dense>
            dense
          </m-button>
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="2">
          <m-button
            raised
            disabled>
            disabled
          </m-button>
        </m-layout-grid-cell>
      </m-layout-grid-inner>
    </m-layout-grid-cell>
    <m-layout-grid-cell :span="12">
      <m-typo-title>Unelevated</m-typo-title>
      <m-layout-grid-inner>
        <m-layout-grid-cell :span="2">
          <m-button unelevated>baseline</m-button>
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="2">
          <m-button
            unelevated
            interactive>
            interactive
          </m-button>
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="2">
          <m-button unelevated>
            <m-icon
              slot="icon"
              icon="cloud"/>
            icon
          </m-button>
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="2">
          <m-button
            unelevated
            dense>
            dense
          </m-button>
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="2">
          <m-button
            unelevated
            disabled>
            disabled
          </m-button>
        </m-layout-grid-cell>
      </m-layout-grid-inner>
    </m-layout-grid-cell>
    <m-layout-grid-cell :span="12">
      <m-typo-title>Stroked</m-typo-title>
      <m-layout-grid-inner>
        <m-layout-grid-cell :span="2">
          <m-button stroked>baseline</m-button>
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="2">
          <m-button
            stroked
            interactive>
            interactive
          </m-button>
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="2">
          <m-button stroked>
            <m-icon
              slot="icon"
              icon="cloud"/>
            icon
          </m-button>
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="2">
          <m-button
            stroked
            dense>
            dense
          </m-button>
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="2">
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
import Typography from '../../dist/typography'
Vue.use(Button)

export default {
}
</script>

<style lang="scss">
$mdc-layout-grid-max-width: 200px;
@import "../../dist/button/styles";
@import "../../dist/typography/styles";
</style>
