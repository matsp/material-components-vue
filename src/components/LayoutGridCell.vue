<template>
    <div v-bind:class="classes">
        <slot />
    </div>
</template>

<script>
export default {
    props: ['modifier'],
    data() {
        return {
            class: ['mdc-layout-grid__cell']
        }
    },
    computed: {
        classes() {
            String(this.modifier).split(' ').map( n =>
                this.class.push('mdc-layout-grid__cell--span-' + n))
            return this.class
        }
    }
}
</script>

<style lang="scss">
@import "@material/layout-grid/mdc-layout-grid";
</style>


