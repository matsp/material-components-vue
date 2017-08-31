<template>
    <ul v-bind:class="classes">
        <slot name="listContent" />
    </ul>
</template>

<script>
export default {
    props: ['modifier'],
    data() {
        return {
            class: ['mdc-list']
        }
    },
    computed: {
        classes() {
            let tmpClass = this.class
            tmpClass.push((this.modifier ? 'mdc-list--' + this.modifier : ''))
            return tmpClass
        }
    }
}
</script>

<style lang="scss">
@import "@material/list/mdc-list";
</style>


