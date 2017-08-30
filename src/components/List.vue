<template>
    <ul class="mdc-list" data-mdc-auto-init="MDCRipple">
        <slot name="items" />
    </ul>
</template>

<script>
import { MDCRipple } from '@material/ripple';

export default {
    mounted() {
        if (this.$slots.items)
            this.$slots.items.map((n) => {
                n.elm.classList.add('mdc-list-item')
            })
            
        MDCRipple.attachTo(this.$el)
    }
}
</script>

<style lang="scss">
@import "@material/list/mdc-list";
</style>


