<template>
    <div class="mdc-tab-bar-scroller">
        <div class="mdc-tab-bar-scroller__indicator mdc-tab-bar-scroller__indicator--back">
            <a class="mdc-tab-bar-scroller__indicator__inner material-icons" href="#" aria-label="scroll back button">
                navigate_before
            </a>
        </div>
        <div class="mdc-tab-bar-scroller__scroll-frame">
            <slot />
        </div>
        <div class="mdc-tab-bar-scroller__indicator mdc-tab-bar-scroller__indicator--forward">
            <a class="mdc-tab-bar-scroller__indicator__inner material-icons" href="#" aria-label="scroll forward button">
                navigate_next
            </a>
        </div>
    </div>
</template>

<script>
import { MDCTabBarScroller } from '@material/tabs'

export default {
    data() {
        return {
            mdcTabBarScroller: null
        }
    },
    mounted() {
        this.mdcTabBarScroller = new MDCTabBarScroller(this.$el)

        if (this.$slots.default) {
            this.$slots.default.map((n) => {
                n.elm.classList.add('mdc-tab-bar-scroller__scroll-frame__tabs')
            })
        }
    },
    beforeDestroy() {
        this.mdcTabBarScroller.destroy()
    }
}
</script>

