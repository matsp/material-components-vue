<template>
    <a v-bind:class="classes">
        {{icon}}
    </a>
</template>

<script>
export default {
    props: ['icon', 'modifier'],
    data() {
        return {
            class: ['material-icons']
        }
    },
    computed: {
        classes() {
            let tmpClass = this.class
            tmpClass.push((this.modifier))
            return tmpClass
        }
    }
}
</script>
<style lang="scss">
@import '~scss/material-icons';
</style>


