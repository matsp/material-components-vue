<template>
    <a class="mdc-tab" :class="classes">
        <slot />
    </a>
</template>

<script>
import { MDCTab } from '@material/tabs'

export default {
    props: {
        active: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            mdcTab: null
        }
    },
    mounted() {
        this.mdcTab = new MDCTab(this.$el)
    },
    beforeDestroy() {
        this.mdcTab.destroy()
    },
    computed: {
        classes() {
            return {
                'mdc-tab--active': this.active
            }
        }
    }
}
</script>

