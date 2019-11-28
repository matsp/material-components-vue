<template>
  <div
    class="mdc-text-field-helper-line"
    v-bind="$attrs"
  >
    <slot />
  </div>
</template>

<script>
export default {
  provide: {
    getHelperText: 0, // do nothing, eliminates Vue warning 'injection not found'
    getCharacterCounter: 0 // do nothing, eliminates Vue warning 'injection not found'
  }
}
</script>
