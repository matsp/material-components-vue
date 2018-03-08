<template>
  <div :style="customStyle">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    customStyle: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
