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
    <slot v-if="$slots['default'] && !fullWidth"/>
    <slot name="trailingIcon"/>
    <slot name="bottomLine"/>
  </div>
</template>

<script>
import { MDCTextField } from '@material/textfield'
import { debounce } from '../'

import themeClassMixin from '../base/themeClassMixin.js'

export default {
  mixins: [themeClassMixin],
  props: {
    value: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    upgraded: {
      type: Boolean,
      default: false
    },
    fullWidth: {
      type: Boolean,
      default: false
    },
    box: {
      type: Boolean,
      default: false
    },
    outlined: {
      type: Boolean,
      default: false
    },
    dense: {
      type: Boolean,
      default: false
    },
    focused: {
      type: Boolean,
      default: false
    },
    textarea: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      mdcTextField: undefined,
      mdcRipple: undefined,
      slotObserver: undefined
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
    }
  },
  mounted () {
    this.updateSlots()
    this.slotObserver = new MutationObserver( () => this.updateSlots())
    this.slotObserver.observe(this.$el, {
      childList: true,
      subtree: true
    })
    this.mdcTextField = MDCTextField.attachTo(this.$el)
  },
  beforeDestroy () {
    this.slotObserver.disconnect()
    this.mdcTextField.destroy()

    if (typeof this.mdcRipple !== 'undefined') {
      this.mdcRipple.destroy()
    }
  },
  methods: {
    updateSlots () {
      if (this.$slots.leadingIcon) {
        this.$slots.leadingIcon.map(n => {
          n.elm.classList.add('mdc-text-field__icon')
          n.elm.setAttribute('tabindex', '0')
          n.elm.setAttribute('role', 'button')
        })
      }
      if (this.$slots.trailingIcon) {
        this.$slots.trailingIcon.map(n => {
          n.elm.classList.add('mdc-text-field__icon')
          n.elm.setAttribute('tabindex', '0')
          n.elm.setAttribute('role', 'button')
        })
      }
    },
    onInput (event) {
      debounce(this.$emit('input', event.target.value))
    }
  }
}
</script>
