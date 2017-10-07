<template>
    <div class="mdc-switch" :class="classes">
        <input v-if="disabled" type="checkbox" class="mdc-switch__native-control" disabled/>
        <input v-else type="checkbox" class="mdc-switch__native-control" />
        <div class="mdc-switch__background">
            <div class="mdc-switch__knob"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            required: false
        },
        disabled: {
            type: Boolean,
            required: false
        }
    },
    computed: {
        classes() {
            return {
                'mdc-switch--disabled': this.disabled
            }
        }
    }
}
</script>

<style lang="scss">
@import "@material/switch/mdc-switch";
</style>
