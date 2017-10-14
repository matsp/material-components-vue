<template>
    <div class="mdc-textfield" :class="classes">
        <i v-if="leadingIcon" class="material-icons mdc-textfield__icon">{{leadingIcon}}</i>
        <input :id="id" class="mdc-textfield__input" :value="value" @input="onInput" :placeholder="placeholder" v-bind="$attrs" />
        <label v-if="label" class="mdc-textfield__label" :class="classesLabel">{{label}}</label>
        <i v-if="trailingIcon" class="material-icons mdc-textfield__icon">{{trailingIcon}}</i>
        <div v-if="bottomLine" class="mdc-textfield__bottom-line"></div>
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
        value: {
            type: String,
            required: true
        },
        placeholder: {
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
        },
        bottomLine: {
            type: Boolean,
            required: false
        },
        leadingIcon: {
            type: String,
            required: false
        },
        trailingIcon: {
            type: String,
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
    beforeDestroy() {
        this.mdcTextfield.destroy()

        if (this.interactive && this.box)
            this.mdcRipple.destroy()
    },
    computed: {
        classes() {
            return {
                'mdc-textfield--disabled': this.disabled,
                'mdc-textfield--upgraded': this.upgraded,
                'mdc-textfield--fullwidth': this.fullWidth,
                'mdc-textfield--box': this.box,
                'mdc-textfield--with-leading-icon': this.leadingIcon,
                'mdc-textfield--with-trailing-icon': this.trailingIcon
            }
        },
        classesLabel() {
            return {
                'mdc-textfield__label--float-above': this.labelFloat
            }
        }
    },
    methods: {
        onInput(event) {
            debounce(this.$emit('input', event.target.value))
        }
    }
}
</script>

