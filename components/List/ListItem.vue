<template>
    <li class="mdc-list-item" v-on="$listeners">
        <div class="mdc-list-item__start-detail" v-if="$slots['startDetail']">
            <slot name="startDetail" />
        </div>
        <slot />
        <span class="mdc-list-item__text" v-if="$slots['primaryText']">
            <slot name="primaryText" />
            <div class="mdc-list-item__text__secondary" v-if="$slots['secondaryText']">
                <slot name="secondaryText" />
            </div>
        </span>
        <div class="mdc-list-item__end-detail" v-if="$slots['endDetail']">
            <slot name="endDetail" />
        </div>
    </li>
</template>
  
<script>
import { MDCRipple } from '@material/ripple'

export default {
    props: {
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
    }
}
</script>

<style lang="scss">
@import "@material/list/mdc-list";
</style>