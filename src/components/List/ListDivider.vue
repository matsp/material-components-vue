<template>
    <li role="separator" v-bind:class="classes"></li>
</template>

<script>
export default {
    props: ['modifier'],
    data() {
        return {
            class: ['mdc-list-divider']
        }
    },
    computed: {
        classes() {
            let tmpClass = this.class
            tmpClass.push((this.modifier ? 'mdc-list-divider--' + this.modifier : ''))
            return tmpClass
        }
    }
}
</script>

<style lang="scss">
@import "@material/list/mdc-list";
</style>


