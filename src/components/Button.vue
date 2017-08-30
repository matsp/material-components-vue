<template>
    <button v-bind:class="classes" data-mdc-auto-init="MDCRipple">
        <slot />
    </button>
</template>

<script>
import { MDCRipple } from '@material/ripple';
export default {
    props: ['modifier'],
    data() {
        return {
            class: ['mdc-button']
        }
    },
    computed: {
        classes() {
            let tmpClass = this.class
            tmpClass.push((this.modifier ? 'mdc-button--' + this.modifier : ''))
            return tmpClass
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
