<template>
    <li role="separator" class="mdc-list-divider" :class="classes" :id="id" />
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            required: false
        },
        isnet: {
            type: Boolean,
            required: false
        }
    },
    computed: {
        classes() {
            return {
                'mdc-list-divider--inset': this.inset
            }
        }
    }
}
</script>

<style lang="scss">
@import "@material/list/mdc-list";
</style>


