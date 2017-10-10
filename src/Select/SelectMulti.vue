<template>
    <select multiple :size="size" class="mdc-multi-select mdc-list" v-model="selected" :disable="disable" @change="onChange">
        <slot />
    </select>
</template>

<script>
export default {
    props: {
        size: {
            type: Number,
            required: false
        },
        disabled: {
            type: Boolean,
            required: false
        }
    },
    data() {
        return {
            selected: []
        }
    },
    methods: {
        onChange(event) {
            this.$emit('selected', this.selected)

        }
    }
}
</script>

<style lang="scss">
@import "@material/select/mdc-select";
@import "@material/list/mdc-list";
</style>

