<template>
    <a v-if="href" role="button" class="mdc-button" :href="href">
        <a v-if="icon" class="material-icons mdc-button__icon">{{icon}}</a>
        <slot />
    </a>
    <button v-else class="mdc-button" :class="classes" v-bind="$attrs" v-on="$listeners">
        <a v-if="icon" class="material-icons mdc-button__icon">{{icon}}</a>
        <slot />
    </button>
</template>

<script>
import { MDCRipple } from '@material/ripple'
export default {
    props: {
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
        },
        href: {
            type: String,
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
            this.mdcRipple = MDCRipple.attachTo(this.$el)
    },
    beforeDestroy() {
        if (this.interactive)
            this.mdcRipple.destroy()
    }
}
</script>

<style lang="scss">
@import "@material/button/mdc-button";
</style>


