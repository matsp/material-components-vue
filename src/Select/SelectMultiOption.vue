<template>
    <option class="mdc-list-item" :value="value" :disabled="disabled">
        <slot />
    </option>
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            required: true
        },
        disabled: {
            type: Boolean,
            required: false
        }
    }
}
</script>

<style lang="scss">
@import "@material/list/mdc-list";
</style>

