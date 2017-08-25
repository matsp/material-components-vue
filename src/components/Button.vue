<template>
    <button class="mdc-button" v-bind:class="classes" data-mdc-auto-init="MDCRipple">
        <slot />
    </button>
</template>

<script>
import { MDCRipple } from '@material/ripple';
export default {
    props: ['modifier'],
    computed: {
        classes() {
            return this.modifier ? 'mdc-button--' + this.modifier : ''
        }
    },
    mounted() {
        MDCRipple.attachTo(this.$el)
    }
}
</script>

<style lang="scss">
@import "@material/button/mdc-button";
</style>
