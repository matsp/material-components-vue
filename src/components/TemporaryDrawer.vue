<template>
    <div class="mdc-temporary-drawer" @click="$emit('toggleDrawer')">
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
    props: ['visible'],
    data() {
        return {
            drawer: null
        }
    },
    mounted() {
        this.drawer = new MDCTemporaryDrawer(this.$el)
    },
    watch: {
        visible() {
            this.drawer.open = this.visible
        }
    }
}
</script>

<style lang="scss">
@import "@material/drawer/mdc-drawer";
</style>

