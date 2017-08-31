<template>
  <div id="app">
    <top-panel />
    <main-panel />
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
@import '@material/typography/mdc-typography';
@import '@material/theme/mdc-theme';
@import '~scss/roboto';
</style>

