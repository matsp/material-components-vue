<template>
  <div
    class="mdc-text-field"
    :class="classes">
    <slot name="leadingIcon"/>
    <input
      class="mdc-text-field__input"
      :value="value"
      @input="onInput"
      v-bind="$attrs"
      v-if="!textarea">
    <textarea
      class="mdc-text-field__input"
      :value="value"
      @input="onInput"
      v-bind="$attrs"
      v-if="textarea"/>
    <label
      class="mdc-text-field__label"
      :class="classesLabel"
      v-if="$slots['default'] && !fullWidth">
      <slot />
    </label>
    <div
      v-if="outlined"
      class="mdc-text-field__outline">
      <svg>
        <path class="mdc-text-field__outline-path"/>
      </svg>
    </div>
    <div
      v-if="outlined"
      class="mdc-text-field__idle-outline"/>
    <slot name="trailingIcon"/>
    <slot name="bottomLine"/>
  </div>
</template>

<script>
import { MDCTextField } from '@material/textfield'
import { debounce } from '../utils'

export default {
  props: {
    value: {
      type: String,
      required: false,
      default: ''
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    upgraded: {
      type: Boolean,
      required: false,
      default: false
    },
    fullWidth: {
      type: Boolean,
      required: false,
      default: false
    },
    box: {
      type: Boolean,
      required: false,
      default: false
    },
    labelFloat: {
      type: Boolean,
      required: false,
      default: false
    },
    outlined: {
      type: Boolean,
      required: false,
      default: false
    },
    dense: {
      type: Boolean,
      required: false,
      default: false
    },
    focused: {
      type: Boolean,
      required: false,
      default: false
    },
    textarea: {
      type: Boolean,
      required: false,
      default: false
    },
    shake: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data () {
    return {
      mdcTextField: null,
      mdcRipple: null,
      float: false
    }
  },
  computed: {
    classes () {
      return {
        'mdc-text-field--disabled': this.disabled,
        'mdc-text-field--upgraded': this.upgraded,
        'mdc-text-field--fullwidth': this.fullWidth,
        'mdc-text-field--box': this.box,
        'mdc-text-field--with-leading-icon': this.$slots.leadingIcon,
        'mdc-text-field--with-trailing-icon': this.$slots.trailingIcon,
        'mdc-text-field--outlined': this.outlined,
        'mdc-text-field--dense': this.dense,
        'mdc-text-field--focused': this.focused,
        'mdc-text-field--textarea': this.textarea
      }
    },
    classesLabel () {
      return {
        'mdc-text-field__label--float-above': this.float,
        'mdc-text-field__label--shake': this.shake
      }
    }
  },
  watch: {
    value () {
      this.value === '' ? this.float = false : this.float = true
    }
  },
  mounted () {
    if (this.$slots.leadingIcon) {
      this.$slots.leadingIcon.map(n => {
        n.elm.classList.add('mdc-text-field__icon')
      })
    }

    if (this.$slots.trailingIcon) {
      this.$slots.trailingIcon.map(n => {
        n.elm.classList.add('mdc-text-field__icon')
      })
    }

    this.mdcTextField = MDCTextField.attachTo(this.$el)
    this.float = this.labelFloat
  },
  beforeDestroy () {
    this.mdcTextField.destroy()

    if (this.interactive && this.box) { this.mdcRipple.destroy() }
  },
  methods: {
    onInput (event) {
      debounce(this.$emit('input', event.target.value))
    }
  }
}
</script>

<style lang="scss" >
@import "@material/textfield/mdc-text-field";
</style>
