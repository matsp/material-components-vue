<template>
    <div class="mdc-simple-menu" :class="classes" tabindex="-1" @MDCSimpleMenu:selected="onSelect" @MDCSimpleMenu:cancel="onCancel">
        <ul class="mdc-simple-menu__items mdc-list" :class="listClasses" role="menu">
            <slot />
        </ul>
    </div>
</template>

<script>
import { MDCSimpleMenu } from '@material/menu'

export default {
    props: {
        startOpen: {
            type: Boolean,
            required: false
        },
        openfromTopLeft: {
            type: Boolean,
            required: false
        },
        openfromTopRight: {
            type: Boolean,
            required: false
        },
        openfromBottomLeft: {
            type: Boolean,
            required: false
        },
        openfromBottomRight: {
            type: Boolean,
            required: false
        },
        dense: {
            type: Boolean,
            required: false
        },
        twoLine: {
            type: Boolean,
            required: false
        }
    },
    data() {
        return {
            mdcSimpleMenu: null
        }
    },
    model: {
        prop: 'selected',
        event: 'change'
    },
    mounted() {
        this.mdcSimpleMenu = new MDCSimpleMenu(this.$el)
        this.mdcSimpleMenu.open = this.open
    },
    destroyed() {
        this.mdcSimpleMenu.destroy()
    },
    methods: {
        show() {
            this.mdcSimpleMenu.show()
        },
        hide() {
            this.mdcSimpleMenu.hide()
        },
        onSelect(event) {
            this.$emit('change', event.detail.index)
        },
        onCancel(event) {
            this.$emit('canceled')
        }
    },
    computed: {
        classes() {
            return {
                'mdc-simple-menu--open': this.startOpen,
                'mdc-simple-menu--open-from-top-left': this.openfromTopLeft,
                'mdc-simple-menu--open-from-top-right': this.openfromTopRight,
                'mdc-simple-menu--open-from-bottom-left': this.openfromBottomLeft,
                'mdc-simple-menu--open-from-bottom-right': this.openfromBottomRight
            }
        },
        listClasses() {
            return {
                'mdc-list--dense': this.dense,
                'mdc-list--two-line': this.twoLine
            }
        }
    }

}
</script>

<style lang="scss">
@import "@material/menu/mdc-menu";
@import "@material/list/mdc-list";
</style>
