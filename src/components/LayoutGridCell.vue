<template>
    <div class="mdc-layout-grid__cell" v-bind:class="classes">
        <slot />
    </div>
</template>

<script>
export default {
    props: ['span'],
    computed: {
        classes() {
            return Array.from(this.span, (n) =>
                'mdc-layout-grid__cell--span-' + n)
        }
    }
}
</script>

<style lang="scss">
@import "@material/layout-grid/mdc-layout-grid";
</style>


