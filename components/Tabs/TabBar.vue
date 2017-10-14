<template>
    <nav class="mdc-tab-bar">
        <slot />
        <span class="mdc-tab-bar__indicator"></span>
    </nav>
</template>

<script>
import { MDCTabBar } from '@material/tabs'

export default {
    props: {
        iconTabBar: {
            type: Boolean,
            required: false
        },
        withIconAndText: {
            type: Boolean,
            required: false
        }
    },
    data() {
        return {
            mdcTabBar: null
        }
    },
    mounted() {
        this.mdcTabBar = new MDCTabBar(this.$el)

        if (this.$slots.default && this.withIconAndText) {
            this.$slots.default.map((n) => {
                n.elm.classList.add('mdc-tab--with-icon-and-text')
            })
        }


        },
        beforeDestroy() {
            this.mdcTabBar.destroy()
        },
        computed: {
            classes() {
                return {
                    'mdc-tab-bar--icon-tab-bar': this.iconTabBar,
                    'mdc-tab-bar--icons-with-text': this.withIconAndText
                }
            }
        }
    }
</script>
