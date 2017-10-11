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
    model: {
        prop: 'selected',
        event: 'change'
    },
    data() {
        return {
            selected: []
        }
    },
    methods: {
        onChange(event) {
            this.$emit('change', this.selected)
        }
    }
}
</script>

<style lang="scss">
@import "@material/select/mdc-select";
@import "@material/list/mdc-list";
</style>

