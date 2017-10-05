<template>
    <button class="mdc-button" :class="classes" :id="id" v-bind="$attrs" v-on="$listeners">
        <a v-if="icon" class="material-icons mdc-button__icon">{{icon}}</a>
        <slot>
            {{text}}
        </slot>
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
        icon: {
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
        interactive: {
            type: Boolean,
            required: false
        }
    },
    data() {
        return {
            mdcRipple: null
        }
    },
    computed: {
        classes() {
            return {
                'mdc-button--raised': this.raised,
                'mdc-button--unelevated': this.unelevated,
                'mdc-button--stroked': this.stroked,
                'mdc-button--dense': this.dense,
                'mdc-button--compact': this.compact
            }
        }
    },
    mounted() {
        if (this.interactive)
            this.mdcRipple = new MDCRipple(this.$el)
    },
    destroyed() {
        this.mdcRipple.destroy()
    }
}
</script>

<style lang="scss">
@import "@material/button/mdc-button";
</style>
