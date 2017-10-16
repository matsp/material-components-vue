<template>
    <aside class="mdc-persistent-drawer" v-on="$listeners">
        <nav class="mdc-persistent-drawer__drawer">
            <header class="mdc-persistent-drawer__header" :class="primaryClasses(primaryHeader)" v-if="$slots['header']">
                <div class="mdc-persistent-drawer__header-content">
                    <slot name="header" />
                </div>
            </header>
            <nav class="mdc-persistent-drawer__content mdc-list" :class="primaryClasses(primaryContent)" v-if="$slots['default']">
               <slot />
            </nav>
        </nav>
    </aside>
</template>

<script>
import { MDCPersistentDrawer } from '@material/drawer'

export default {
     props: {
        primaryHeader: {
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
            mdcPersistentDrawer: null
        }
    },
    mounted() {
        this.mdcPersistentDrawer = MDCPersistentDrawer.attachTo(this.$el)
    },
    beforeDestroy() {
        this.mdcPersistentDrawer.destroy()
    },
    methods: {
        primaryClasses(prop) {
            return {
                'mdc-theme--primary-bg': prop,
                'mdc-theme--text-primary-on-primary': prop
            }
        },
        show() {
            this.mdcPersistentDrawer.open = true
        },
        hide() {
            this.mdcPersistentDrawer.open = false
        }
    }
}
</script>