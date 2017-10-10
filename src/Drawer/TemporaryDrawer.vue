<template>
    <div class="mdc-temporary-drawer" @click="hide">
        <nav class="mdc-temporary-drawer__drawer">
            <header class="mdc-temporary-drawer__header" v-if="$slots['drawerHeader']">
                <div class="mdc-temporary-drawer__header-content mdc-theme--primary-bg mdc-theme--text-primary-on-primary">
                    <slot name="drawerHeader" />
                </div>
            </header>
            <nav class="mdc-temporary-drawer__content" v-if="$slots['drawerContent']">
                <slot name="drawerContent" />
            </nav>
        </nav>
    </div>
</template>

<script>
import { MDCTemporaryDrawer } from '@material/drawer'

export default {
    data() {
        return {
            mdcTemporaryDrawer: null
        }
    },
    mounted() {
        this.mdcTemporaryDrawer = new MDCTemporaryDrawer(this.$el)
    },
    destroyed() {
        this.mdcTemporaryDrawer.destroy()
    },
    methods: {
        show() {
            this.mdcTemporaryDrawer.open = true
        },
        hide() {
            this.mdcTemporaryDrawer.open = false
        }
    }
}
</script>

<style lang="scss">
@import "@material/drawer/mdc-drawer";
</style>

