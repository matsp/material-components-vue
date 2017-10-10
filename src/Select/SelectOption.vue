<template>
    <li class="mdc-list-item" role="option" :aria-selected="selected" :aria-disabled="disabled" :tabindex="disabled?-1:0">
        <slot />
    </li>
</template>

<script>
export default {
    props: {
        selected: {
            type: Boolean,
            required: false
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
