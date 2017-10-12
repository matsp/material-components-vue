<template>
    <option class="mdc-list-item" :value="id" :disabled="disabled">
        <slot />
    </option>
</template>

<script>
export default {
    props: {
        disabled: {
            type: Boolean,
            required: false
        },
        id: {
            type: String,
            required: true
        }
    }
}
</script>


