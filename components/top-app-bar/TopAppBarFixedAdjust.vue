<template>
  <div
    class="mdc-top-app-bar--fixed-adjust"
    :class="classes">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    dense: {
      type: Boolean,
      default: false
    },
    short: {
      type: Boolean,
      default: false
    },
    prominent: {
      type: Boolean,
      default: false
    },
    denseProminent:  {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      return {
        'mdc-top-app-bar--dense-fixed-adjust': this.dense && !this.short,
        'mdc-top-app-bar--short-fixed-adjust': this.short,
        'mdc-top-app-bar--prominent-fixed-adjust': this.prominent && !this.short,
        'mdc-top-app-bar--dense-prominent-fixed-adjust': this.denseProminent && !this.short,
      }
    }
  }
}
</script>
