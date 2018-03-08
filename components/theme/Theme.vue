<template>
  <div :style="customStyles">
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
