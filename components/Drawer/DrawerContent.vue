<template>
  <nav
    class="mdc-drawer__content"
    v-if="$slots['default']">
    <slot />
  </nav>
</template>

<style lang="scss">
@import "@material/drawer/mdc-drawer";
</style>
