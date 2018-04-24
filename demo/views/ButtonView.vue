<template>
  <m-layout-grid-inner>
    <m-layout-grid-cell :span="12">
      <m-typo-headline :level="5">Text</m-typo-headline>
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
      <m-typo-headline :level="5">Raised</m-typo-headline>
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
      <m-typo-headline :level="5">Unelevated</m-typo-headline>
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
      <m-typo-headline :level="5">Outlined</m-typo-headline>
      <m-layout-grid-inner>
        <m-layout-grid-cell :span="2">
          <m-button outlined>baseline</m-button>
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="2">
          <m-button
            outlined
            interactive>
            interactive
          </m-button>
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="2">
          <m-button outlined>
            <m-icon
              slot="icon"
              icon="cloud"/>
            icon
          </m-button>
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="2">
          <m-button
            outlined
            dense>
            dense
          </m-button>
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="2">
          <m-button
            outlined
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
