<template>
  <nav
    class="mdc-drawer__content"
    v-if="$slots['default']">
    <slot />
  </nav>
</template>
