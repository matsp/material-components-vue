<template>
    <div class="mdc-layout-grid__inner" :id="id">
        <slot />
    </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      require: false
    }
  }
}
</script>

<style lang="scss">
@import "@material/layout-grid/mdc-layout-grid";
</style>
