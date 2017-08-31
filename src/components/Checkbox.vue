<template>
    <div class="mdc-checkbox">
        <input type="checkbox" class="mdc-checkbox__native-control" />
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
            default: false,
            type: Boolean
        },
        indeterminate: {
            default: false,
            type: Boolean        
        }, 
        disabled: {
            default: false,
            type: Boolean
        }
    },
    data() {
        return {
            checkbox: null
        }
    },
    mounted() {
        this.checkbox = new MDCCheckbox(this.$el)
        this.checkbox.disabled = this.disabled
        this.checkbox.checked = this.checked
        this.checkbox.indeterminate = this.indeterminate
    },
    watch: {
        disabled() {
            this.checkbox.disabled = this.disabled
        },
        checked() {
            this.checkbox.checked = this.checked            
        },
        indeterminate() {
            this.checkbox.indeterminate = this.indeterminate
        }
    }
}
</script>

<style lang="scss">
@import "@material/checkbox/mdc-checkbox";
</style>


