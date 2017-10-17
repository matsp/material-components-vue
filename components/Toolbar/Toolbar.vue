<template>
    <header class="mdc-toolbar" :class="classes">
        <slot />
    </header>
</template>

<script>
import { MDCToolbar } from '@material/toolbar'

export default {
    props: {
        flexible: {
            type: Boolean,
            required: false
        },
        flexibleDefault: {
            type: Boolean,
            required: false
        },
        fixed: {
            type: Boolean,
            required: false
        },
        waterfall: {
            type: Boolean,
            required: false
        },
        fixedLastRow: {
            type: Boolean,
            required: false
        }
    },
    data() {
        return {
            mdcToolbar: null
        }
    },
    mounted() {
        this.mdcToolbar = MDCToolbar.attachTo(this.$el)
        this.mdcToolbar.fixedAdjustElement = document.querySelector('.mdc-toolbar-fixed-adjust')
    },
    beforeDestroy() {
        this.mdcToolbar.destroy()
    },
    computed: {
        classes() {
            return {
                'mdc-toolbar--fixed': this.fixed || this.waterfall || this.fixedLastRow,
                'mdc-toolbar--fixed-lastrow-only': this.fixedLastRow,
                'mdc-toolbar--waterfall': this.waterfall,
                'mdc-toolbar--flexible': this.flexible,
                'mdc-toolbar--flexible-default-behavior': this.flexible && this.flexibleDefault
            }
        }
    }
}
</script>

