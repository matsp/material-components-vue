<template>
    <a class="mdc-list-item" :class="classes" v-on="$listeners">
        <i v-if="startIcon" class="material-icons mdc-list-item__start-detail" aria-hidden="true">{{startIcon}}</i>
        <slot />
        <i v-if="endIcon" class="material-icons mdc-list-item__end-detail" aria-hidden="true">{{endIcon}}</i>
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
            this.mdcRipple = MDCRipple.attachTo(this.$el)

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
        }
    }

}
</script>

<style lang="scss">
@import "@material/list/mdc-list";
</style>