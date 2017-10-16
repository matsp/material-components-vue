<template>
    <a class="mdc-list-item" :class="classes" v-on="$listeners">
        <i v-if="startIcon || endIcon" class="material-icons" :class="iconClasses" aria-hidden="true">{{startIcon ? startIcon : endIcon}}</i>
        <slot />
    </a>
</template>

<script>
import { MDCRipple } from '@material/ripple'

export default {
    props: {
        selected: {
            type: Boolean,
            required: false
        },
        startIcon: {
            type: String,
            required: false
        },
        endIcon: {
            type: String,
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
    mounted() {
        if (this.interactive)
            this.mdcRipple = new MDCRipple(this.$el)

    },
    beforeDestroy() {
        if (this.interactive)
            this.mdcRipple.destroy()
    },
    computed: {
        classes() {
            return {
                'mdc-temporary-drawer--selected': this.selected
            }
        },
        iconClasses() {
            return {
                'mdc-list-item__start-detail': this.startIcon,
                'mdc-list-item__end-detail': this.endIcon,
            }
        }
    }

}
</script>

