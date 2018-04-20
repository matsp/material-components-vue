<template>
  <m-layout-grid-cell :span="span">
    <slot />
  </m-layout-grid-cell>
</template>

<script>
export default {
  props: {
    span: {
      type: Number,
      default: 4,
      validator: (value) => value >= 1 && value <= 12
    }
  }
}
</script>
