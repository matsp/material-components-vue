<template>
    <div class="mdc-temporary-drawer" @click="toggleDrawer">
        <nav class="mdc-temporary-drawer__drawer">
            <header class="mdc-temporary-drawer__header" v-if="$slots['header']">
                <div class="mdc-temporary-drawer__header-content mdc-theme--primary-bg mdc-theme--text-primary-on-primary">
                    <slot name="header" />
                </div>
            </header>
            <nav class="mdc-temporary-drawer__content" v-if="$slots['content']">
                <slot name="content" />
            </nav>
        </nav>
    </div>
</template>

<script>
import { MDCTemporaryDrawer } from '@material/drawer'


export default {
    props: ['visible', 'headerTitle'],
    data() {
        return {
            drawer: null
        }
    },
    mounted() {
        this.drawer = new MDCTemporaryDrawer(this.$el)
    },
    methods: {
        toggleDrawer() {
            this.$emit('toggleDrawer');
        }
    },
    watch: {
        visible(state) {
            this.drawer.open = state
        }
    }
}
</script>

<style lang="scss">
@import "@material/drawer/mdc-drawer";
</style>

