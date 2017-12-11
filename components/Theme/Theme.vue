<template>
  <div :class="classes">
      <slot />
  </div>   
</template>

<script>
export default {
    props: {
        dark: {
            type: Boolean,
            required: false
        }
    },
    computed: {
        classes() {
            return {
                '--mdc-theme-dark': this.dark
            }
        }
    }
}
</script>


<style lang="scss">
@import "./theme.scss";
</style>

