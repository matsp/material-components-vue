<template>
    <ul class="mdc-list" :class="classes" >
        <slot />
    </ul>
</template>

<script>
export default {
  props: {
    avatar: {
      type: Boolean,
      required: false
    },
    darkTheme: {
      type: Boolean,
      required: false
    },
    dense: {
      type: Boolean,
      required: false
    },
    twoLine: {
      type: Boolean,
      required: false
    }
  },
  computed: {
    classes() {
      return {
        'mdc-list--theme-dark': this.darkTheme,
        'mdc-list--theme-dense': this.dense,
        'mdc-list--two-line': this.twoLine,
        'mdc-list--avatar-list': this.avatar
      }
    }
  }
}
</script>

<style lang="scss">
@import "@material/list/mdc-list";
</style>
