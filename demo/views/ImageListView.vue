<template>
  <m-layout-grid-inner>
    <m-layout-grid-cell :span="12">
      <m-typo-title>Standard</m-typo-title>
      <m-layout-grid-inner>
        <m-layout-grid-cell :span="3">
          <m-image-list
            :standard-column="2"
            text-protection>
            <m-image-list-item>
              <img
                slot="image"
                src="../assets/images/cat.jpg">
              Cat
            </m-image-list-item>
            <m-image-list-item>
              <img
                slot="image"
                src="../assets/images/cat.jpg">
              Cat
            </m-image-list-item>
            <m-image-list-item>
              <img
                slot="image"
                src="../assets/images/cat.jpg">
              Cat
            </m-image-list-item>
            <m-image-list-item>
              <img
                slot="image"
                src="../assets/images/cat.jpg">
              Cat
            </m-image-list-item>
          </m-image-list>
        </m-layout-grid-cell>
      </m-layout-grid-inner>
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
