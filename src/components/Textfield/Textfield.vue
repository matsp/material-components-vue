<template>
    <div class="mdc-textfield" :class="classes">
        <input :id="id" :class="mdc-textfield__input" :class="classesInput" :value="value" @input="updateModel" :placeholder="placeholder" :type="type" v-bind="$attrs" />
        <label v-if="label" class="mdc-textfield__label" :class="classesLabel">{{label}}</label>
    </div>
</template>

<script>
import { MDCTextfield } from '@material/textfield'
import { MDCRipple } from '@material/ripple'
import { debounce } from '../utils'

export default {
    props: {
        label: {
            type: String,
            required: false
        },
        type: {
            type: String,
            default: 'text'
        },
        value: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            required: false
        },
        id: {
            type: String,
            required: false
        },
        disabled: {
            type: Boolean,
            required: false
        },
        upgraded: {
            type: Boolean,
            required: false
        },
        fullWidth: {
            type: Boolean,
            required: false
        },
        box: {
            type: Boolean,
            required: false
        },
        labelFloat: {
            type: Boolean,
            required: false
        },
        interactive: {
            type: Boolean,
            required: false
        }
    },
    data() {
        return {
            mdcTextfield: null,
            mdcRipple: null
        }
    },
    mounted() {
        this.mdcTextfield = new MDCTextfield(this.$el)
        
        if (this.interactive && this.box)
            this.mdcRipple = new MDCRipple(this.$el)
    },
    destroyed() {
        this.mdcTextfield.destroy()
        if (this.mdcRipple !== null)
            this.mdcRipple.destroy()
    },
    computed: {
        classes() {
            return {
                'mdc-textfield--disabled': this.disabled,
                'mdc-textfield--upgraded': this.upgraded,
                'mdc-textfield--fullwidth': this.fullWidth,
                'mdc-textfield--box': this.box
            }
        },
        classesInput() {
            return {
                
            }
        },
        classesLabel() {
            return {
                'mdc-textfield__label--float-above': this.labelFloat
            }
        }
    },
    methods: {
        updateModel(event) {
            debounce(this.$emit('input', event.target.value))
        }
    }
}
</script>

<style lang="scss">
@import "@material/textfield/mdc-textfield";
</style>
