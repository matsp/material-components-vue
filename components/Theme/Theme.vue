<template>
  <div :class="classes" :style="styles">
      <slot />
  </div>   
</template>

<script>
export default {
    props: {
        dark: {
            type: Boolean,
            required: false
        },
        customStyles: {
            type: Object,
            required: false
        }
    },
    computed: {
        classes() {
            return {
                'mdc-theme--dark': this.dark
            }
        }
    },
    styles() {
      return this.customStyles
    }
}
</script>


<style lang="scss">
@import "./theme.scss";
</style>

