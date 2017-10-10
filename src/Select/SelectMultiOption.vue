<template>
    <option class="mdc-list-item" :disabled="disabled" >
        <slot />
    </option>
</template>

<script>
export default {
    props: {
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

