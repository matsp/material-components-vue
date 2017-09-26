<template>
  <main>
    <m-layout-grid :toolbarAdjust="true">
      <keep-alive>
        <router-view />
      </keep-alive>
    </m-layout-grid>
  </main>
</template>

<script>
export default {

}
</script>

<style>
@import '~material-components-vue/dist/material-components-vue.css';
</style>