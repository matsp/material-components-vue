<template>
  <m-layout-grid-inner>
    <m-layout-grid-cell :span="12">
      <m-typo-display :level="1">Material Components Vue</m-typo-display>
      <m-layout-grid-inner>
        <m-layout-grid-cell :span="12"/>
        <m-layout-grid-cell :span="6">
          <m-elevation
            :level="2"
            class="elevation-padding">
          <m-typo-subheading :level="2">
            Material-components-vue integrates the
            <a href="https://github.com/material-components/material-components-web">mdc-web</a>
            (by google) vanilla components with
            <a href="https://vuejs.org">Vue.js</a> following the 
            <a href="https://github.com/material-components/material-components-web/blob/master/docs/integrating-into-frameworks.md#the-simple-approach-wrapping-mdc-web-vanilla-components">simple approach</a>.
          </m-typo-subheading>
          <p/>
          <m-typo-subheading :level="1">
           The main goal of this library is to provide Material Design styled components for Vue.js targeting browsers only.
           Material-components-vue is a libray that contains decoupled components following the KISS principles. Components
           are implemented according to the mdc-web specifications and user friendly API. This library is under active development
           and will have some breaking changes due the synchronization with the parent mdc-web library, so keep an eye on the
           <a href="https://github.com/matsp/material-components-vue/blob/master/CHANGELOG.md">changelog</a> to be up-to-date.
          </m-typo-subheading>
          </m-elevation>
        </m-layout-grid-cell>
      </m-layout-grid-inner>
    </m-layout-grid-cell>
  </m-layout-grid-inner>
</template>

<script>
import Vue from 'vue'
import Typography from '../../dist/typography'
import Elevation from '../../dist/elevation'

Vue.use(Typography)
Vue.use(Elevation)

export default {
}
</script>

<style lang="scss">
$mdc-layout-grid-max-width: 200px;
@import "../../dist/typography/styles";
@import "../../dist/elevation/styles";

.elevation-padding {
  padding: 20px;
}
</style>
