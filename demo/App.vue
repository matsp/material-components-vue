<template>
  <div id="app">
    <m-typography>
      <top-panel />
      <main-panel />
    </m-typography>
  </div>
</template>

<script>
import TopPanel from 'panels/TopPanel'
import MainPanel from 'panels/MainPanel'

export default {
  components: { TopPanel, MainPanel }
}
</script>

<style lang="scss">
$mdc-theme-primary: #2196f3;
$mdc-theme-accent: #ff1744;
$mdc-theme-background: #f5f5f5;
@import '../components/styles.scss';
@import '~normalize.css/normalize.css';
// @import url('https://cdnjs.com/libraries/normalize')
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
</style>


