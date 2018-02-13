<template>
  <nav class="mdc-drawer mdc-drawer--permanent">
    <slot name="toolbarSpacer" />
    <slot />
  </nav>
</template>

<style lang="scss">
@import "@material/drawer/mdc-drawer";
</style>
