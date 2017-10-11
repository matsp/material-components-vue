<template>
    <div class="mdc-select" :class="classes" tabindex="0" :aria-disabled="disabled" role="listbox" @MDCSelect:change="onChange">
        <span class="mdc-select__selected-text"></span>
         <div class="mdc-simple-menu mdc-select__menu">
             <ul class="mdc-list mdc-simple-menu__items">
                 <slot />
             </ul>
         </div>
    </div>
</template>

<script>
import { MDCSelect } from '@material/select'

export default {
    props: {
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
            mdcSelect: null
        }
    },
    mounted() {
        this.mdcSelect = new MDCSelect(this.$el);
    },
    destroy() {
        this.mdcSelect.destroy()
    },
    computed: {
        classes() {
            return {
                'mdc-select--disabled': this.disabled
            }
        }
    },
    methods: {
        onChange(event) {
            this.$emit('change', this.mdcSelect.value)
        }
    }
}
</script>

<style lang="scss">
@import "@material/select/mdc-select";
@import "@material/menu/mdc-menu";
@import "@material/list/mdc-list";
</style>
