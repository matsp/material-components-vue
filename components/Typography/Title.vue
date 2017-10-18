<template>
    <h2 class="mdc-typography--title" :class="classes">
        <slot />
    </h2>
</template>

<script>
export default {
    props: {
        adjustMargin: {
            type: Boolean,
            default: true
        }
    },
    computed: {
        classes() {
            return {
                'mdc-typography--adjust-margin': this.adjustMargin
            }
        }
    }
}
</script>

<style lang="scss">
@import "@material/typography/mdc-typography";
</style>