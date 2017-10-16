<template>
    <div class="mdc-temporary-drawer" @click="hide">
        <nav class="mdc-temporary-drawer__drawer">
            <div class="mdc-temporary-drawer__toolbar-spacer" :class="primaryClasses(primaryToolbarSpacer)" v-if="$slots['toolbarSpacer']">
                <slot name="toolbarSpacer" />
            </div>
            <header class="mdc-temporary-drawer__header" v-if="$slots['header']">
                <div class="mdc-temporary-drawer__header-content" :class="primaryClasses(primaryHeader)">
                    <slot name="header" />
                </div>
            </header>
            <nav class="mdc-temporary-drawer__content mdc-list" :class="primaryClasses(primaryContent)">
                <slot />
            </nav>
        </nav>
    </div>
</template>

<script>
import { MDCTemporaryDrawer } from '@material/drawer'

export default {
    props: {
        primaryHeader: {
            type: Boolean,
            required: false
        },
        primaryToolbarSpacer: {
            type: Boolean,
            required: false
        },
        primaryContent: {
            type: Boolean,
            required: false
        }
    },
    data() {
        return {
            mdcTemporaryDrawer: null
        }
    },
    mounted() {
        this.mdcTemporaryDrawer = MDCTemporaryDrawer.attachTo(this.$el)
    },
    beforeDestroy() {
        this.mdcTemporaryDrawer.destroy()
    },
    methods: {
        primaryClasses(el) {
            return {
                'mdc-theme--primary-bg': el,
                'mdc-theme--text-primary-on-primary': el
            }
        },
        show() {
            this.mdcTemporaryDrawer.open = true
        },
        hide() {
            this.mdcTemporaryDrawer.open = false
        }
    }
}
</script>


