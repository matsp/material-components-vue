<template>
    <button class="mdc-button" :class="classes" :id="id" v-bind="$attrs" data-mdc-auto-init="MDCRipple">
        {{text}}
    </button>
</template>

<script>
import { MDCRipple } from '@material/ripple'
export default {
    props: {
        text: {
            type: String,
            required: false
        },
        id: {
            type: String,
            required: false
        },
        raised: {
            type: Boolean,
            required: false
        },
        unelevated: {
            type: Boolean,
            required: false
        },
        stroked: {
            type: Boolean,
            required: false
        },
        dense: {
            type: Boolean,
            required: false
        },
        compact: {
            type: Boolean,
            required: false
        },
        primary: {
            type: Boolean,
            required: false
        },
        accent: {
            type: Boolean,
            required: false
        },
    },
    computed: {
        classes() {
            return {
                'mdc-button--raised': this.raised,
                'mdc-button--unelevated': this.unelevated,
                'mdc-button--stroked': this.stroked,
                'mdc-button--dense': this.dense,
                'mdc-button--compact': this.compact,
                'mdc-button--primary': this.primary,
                'mdc-button--accent': this.accent
            }
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
