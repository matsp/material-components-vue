<template>
  <nav class="mdc-drawer mdc-drawer--permanent">
    <div
      class="mdc-drawer__toolbar-spacer"
      v-if="$slots['toolbarSpacer']">
      <slot name="toolbarSpacer" />
    </div>
    <div
      class="mdc-drawer__content"
      v-if="$slots['default']">
      <slot />
    </div>
  </nav>
</template>

<style lang="scss">
@import "@material/drawer/mdc-drawer";
</style>
