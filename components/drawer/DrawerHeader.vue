<template>
  <header
    class="mdc-drawer__header"
    v-if="$slots['default']">
    <div class="mdc-drawer__header-content">
      <slot />
    </div>
  </header>
</template>
