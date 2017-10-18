<template>
    <div class="mdc-checkbox">
        <input type="checkbox" class="mdc-checkbox__native-control" v-bind="$attrs" v-model="model" />
        <div class="mdc-checkbox__background">
            <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                <path class="mdc-checkbox__checkmark__path" fill="none" stroke="white" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
            </svg>
            <div class="mdc-checkbox__mixedmark"></div>
        </div>
    </div>
</template>

<script>
import { MDCCheckbox } from '@material/checkbox'
export default {
    props: {
        checked: {
            type: Boolean,
            required: false
        },
        indeterminate: {
            type: Boolean,
            required: false
        }
    },
    model: {
        prop: 'checked',
        event: 'change'
    },
    data() {
        return {
            mdcCheckbox: null
        }
    },
    mounted() {
        this.mdcCheckbox = MDCCheckbox.attachTo(this.$el)
        this.mdcCheckbox.indeterminate = this.indeterminate
    },
    beforeDestroy() {
        this.mdcCheckbox.destroy()
    },
    watch: {
        checked() {
            this.mdcCheckbox.indeterminate = false
        }
    },
    computed: {
        model: {
            get() {
                return this.checked
            },
            set(value) {
                this.$emit('change', value)
            }
        }
    }
}
</script>

<style lang="scss">
@import "@material/checkbox/mdc-checkbox";
</style>
