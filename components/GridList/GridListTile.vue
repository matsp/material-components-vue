<template>
    <li class="mdc-grid-tile" v-on="$listeners">
        <div class="mdc-grid-tile__primary">
            <slot name="primary">
                <img v-if="imgSrc" class="mdc-grid-tile__primary-content" :src="imgSrc" />
            </slot>
        </div>
        <span class="mdc-grid-tile__secondary" v-if="$slots['default']">
            <span class="mdc-grid-tile__title">
                <slot />
            </span>
            <i v-if="icon" class="mdc-grid-tile__icon material-icons">
                {{icon}}
            </i>
            <slot name="supporttext" />
        </span>
    </li>
</template>

<script>
export default {
    props: {
        imgSrc: {
            type: String,
            required: false
        },
        icon: {
            type: String,
            required: false
        }
    },
    mounted() {
        if (this.$slots.supporttext) {
            this.$slots.supporttext.map(n =>
                n.elm.classList.add('mdc-grid-tile__support-text')
            )
        }

        if (this.$slots.primary) {
            this.$slots.primary.map(n =>
                n.elm.classList.add('mdc-grid-tile__primary-content')
            )
        }
    }
}
</script>

<style lang="scss">
@import "@material/grid-list/mdc-grid-list";
</style>