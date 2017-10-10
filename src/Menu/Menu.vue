<template>
    <div class="mdc-simple-menu" :class="classes" :id="id" tabindex="-1">
        <slot />
    </div>
</template>

<script>
import { MDCSimpleMenu } from '@material/menu'

export default {
    props: {
        id: {
            type: String,
            required: false
        },
        open: {
            type: Boolean,
            required: true
        },
        fromTopToLeft: {
            type: Boolean,
            required: false
        },
        fromTopToRight: {
            type: Boolean,
            required: false
        },
        fromBottomLeft: {
            type: Boolean,
            required: false
        },
        fromBottomRight: {
            type: Boolean,
            required: false
        }
    },
    data() {
        return {
            mdcSimpleMenu: null
        }
    },
    mounted() {
        this.mdcSimpleMenu = new MDCSimpleMenu(this.$el)

        if (this.$slots.default)
            this.$slots.default.map((n) => {
                n.elm.classList.add('mdc-simple-menu__items')
            })
    },
    destroyed() {
        this.mdcSimpleMenu.destroy()
    },
    computed: {
        classes() {
            return {
                'mdc-simple-menu--open': this.open,
                'mdc-simple-menu--open-from-top-left': this.fromTopLeft,
                'mdc-simple-menu--open-from-top-right': this.fromTopRight,
                'mdc-simple-menu--open-from-bottom-left': this.fromBottomLeft,
                'mdc-simple-menu--open-from-bottom-right': this.fromBottomRight
            }
        }
    }

}
</script>

<style lang="scss">
@import "@material/menu/mdc-menu";
</style>
