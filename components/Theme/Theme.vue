<template>
  <div :style="customStyles">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    customStyles: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
