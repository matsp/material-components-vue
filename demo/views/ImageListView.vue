<template>
  <m-layout-grid-inner>
    <m-layout-grid-cell :span="12">
      <m-typo-display :level="1">ImageList</m-typo-display>
      <m-typo-body :level="2">
        <a href="https://github.com/matsp/material-components-vue/blob/master/components/image-list">
          https://github.com/matsp/material-components-vue/blob/master/components/image-list
        </a>
      </m-typo-body>
    </m-layout-grid-cell>
    <m-layout-grid-cell :span="3">
      <m-image-list
        :standardColumn="2"
        textProtection>
        <m-image-list-item>
          <img slot="image" src="../assets/images/cat.jpg">
          Cat
        </m-image-list-item>
        <m-image-list-item> 
          <img slot="image" src="../assets/images/cat.jpg">
          Cat
        </m-image-list-item>
        <m-image-list-item>
          <img slot="image" src="../assets/images/cat.jpg">
          Cat
        </m-image-list-item>
        <m-image-list-item>
          <img slot="image" src="../assets/images/cat.jpg">
          Cat
        </m-image-list-item>
      </m-image-list>
    </m-layout-grid-cell>
  </m-layout-grid-inner>
</template>

<script>
import Vue from 'vue'
import ImageList from '../../dist/image-list'

Vue.use(ImageList)

export default {
}
</script>

<style lang="scss">
@import "../../dist/image-list/styles";

</style>
