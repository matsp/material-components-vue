<template>
    <li class="mdc-list-item" role="option" :id="id" :aria-selected="selected" :aria-disabled="disabled" :tabindex="disabled?-1:0">
        <slot />
    </li>
</template>

<script>
export default {
  props: {
    selected: {
      type: Boolean,
      required: false
    },
    disabled: {
      type: Boolean,
      required: false
    },
    id: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
@import "@material/list/mdc-list";
</style>
