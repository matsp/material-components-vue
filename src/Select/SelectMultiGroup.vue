<template>
    <optgroup class="mdc-list-group" :label="label">
        <slot />
    </optgroup>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss">
@import "@material/list/mdc-list";
</style>
