<template>
    <div class="mdc-textfield mdc-textfield--textarea" :class="classes">
        <textarea :id="id" class="mdc-textfield__input" v-model="model" :placeholder="placeholder" :rows="rows" :cols="cols" />
        <label v-if="label" class="mdc-textfield__label" :class="classesLabel">{{label}}</label>
    </div>
</template>

<script>
import { MDCTextfield } from '@material/textfield'
import { debounce } from '../utils'

export default {
    model: {
        prop: 'value',
        event: 'input'
    },
    props: {
        label: {
            type: String,
            required: false
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
        rows: {
            type: Number,
            required: false
        },
        cols: {
            type: Number,
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
        }
    },
    data() {
        return {
            mdcTextfield: null
        }
    },
    mounted() {
        this.mdcTextfield = new MDCTextfield(this.$el)
    },
    beforeDestroy() {
        this.mdcTextfield.destroy()
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
        classesLabel() {
            return {
                'mdc-textfield__label--float-above': this.labelFloat
            }
        },
        model: {
            get() {
                return this.value
            },
            set(value) {
                this.$emit('input', value)
            }
        }
    }
}
</script>

