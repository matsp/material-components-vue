<template>
    <li class="mdc-list-item" :id="id" v-on="$listeners" :data-mdc-auto-init="interactive ? MDCRipple : null">
        <slot name="listItemStartDetail" />
        <slot name="listItemContent" />
        <slot name="listItemEndDetail" />
        <span class="mdc-list-item__text" v-if="$slots['listItemText'] && $slots['listItemTextSecondary']">
            <slot name="listItemText" />
            <slot name="listItemTextSecondary" />
        </span>
    </li>
</template>
  
<script>
import { MDCRipple } from '@material/ripple'

export default {
    props: {
        id: {
            type: String,
            required: false
        },
        interactive: {
            type: Boolean,
            required: false
        }
    },
    mounted() {
        MDCRipple.attachTo(this.$el)

        if (this.$slots.listItemStartDetail)
            this.$slots.listItemStartDetail.map((n) => {
                n.elm.classList.add('mdc-list-item__start-detail')
            })
        if (this.$slots.listItemEndDetail)
            this.$slots.listItemEndDetail.map((n) => {
                n.elm.classList.add('mdc-list-item__end-detail')
            })
        if (this.$slots.listItemTextSecondary && this.$slots.listItemText)
            this.$slots.listItemTextSecondary.map((n) => {
                n.elm.classList.add('mdc-list-item__text__secondary')
            })
    }
}
</script>

<style lang="scss">
@import "@material/list/mdc-list";
</style>


