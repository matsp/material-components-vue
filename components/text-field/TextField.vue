<template>
  <div
    :class="classes"
    class="mdc-text-field"
  >
    <slot name="leadingIcon" />
    <input
      v-if="!textarea"
      :value="value"
      class="mdc-text-field__input"
      v-bind="$attrs"
      @input="$emit('model', $event.target.value)"
      v-on="$listeners"
    >
    <textarea
      v-if="textarea"
      :value="value"
      class="mdc-text-field__input"
      v-bind="$attrs"
      @input="$emit('model', $event.target.value)"
      v-on="$listeners"
    />
    <div
      v-if="textarea || outlined"
      class="mdc-notched-outline"
    >
      <div class="mdc-notched-outline__leading" />
      <div
        v-if="$slots.default"
        class="mdc-notched-outline__notch"
      >
        <slot />
      </div>
      <div class="mdc-notched-outline__trailing" />
    </div>
    <slot v-if="$slots.default && !fullWidth && !textarea && !outlined" />
    <slot name="trailingIcon" />
    <slot
      v-if="!outlined"
      name="bottomLine"
    />
  </div>
</template>

<script>
import { MDCTextField } from '@material/textfield'

import { baseComponentMixin, themeClassMixin } from '../base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  model: {
    prop: 'value',
    event: 'model'
  },
  provide () {
    return {
      getLabel: this.getLabel,
      getLineRipple: this.getLineRipple,
      getOutline: this.getOutline,
      getHelperText: this.getHelperText,
      getCharacterCounter: this.getCharacterCounter,
      getLeadingIcon: this.getLeadingIcon,
      getTrailingIcon: this.getTrailingIcon
    }
  },
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
    },
    useNativeValidation: {
      type: Boolean,
      default: true
    },
    valid: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      mdcTextField: undefined,
      slotObserver: undefined
    }
  },
  computed: {
    classes () {
      return {
        'mdc-text-field--upgraded': this.upgraded,
        'mdc-text-field--fullwidth': this.fullWidth && !this.$slots.default && !this.outlined,
        'mdc-text-field--with-leading-icon': this.$slots.leadingIcon,
        'mdc-text-field--with-trailing-icon': this.$slots.trailingIcon,
        'mdc-text-field--outlined': this.outlined && !this.fullWidth,
        'mdc-text-field--dense': this.dense,
        'mdc-text-field--focused': this.focused,
        'mdc-text-field--textarea': this.textarea,
        'mdc-text-field--no-label': !this.$slots.default && !this.fullWidth
      }
    }
  },
  watch: {
    useNativeValidation () {
      this.mdcTextField.useNativeValidation = this.useNativeValidation
    },
    valid () {
      this.mdcTextField.valid = this.valid
    },
    value () {
      this.mdcTextField.value = this.value
    },
    disabled () {
      this.mdcTextField.disabled = this.disabled
    },
    outlined () {
      this.reInstantiate()
    },
    fullWidth () {
      this.reInstantiate()
    },
    textarea () {
      this.reInstantiate()
    }
  },
  mounted () {
    this.instantiate()
  },
  beforeDestroy () {
    this.mdcTextField.destroy()
  },
  methods: {
    reInstantiate () {
      this.mdcTextField.destroy()
      this.instantiate()
    },
    instantiate () {
      this.mdcTextField = MDCTextField.attachTo(this.$el)
      this.mdcTextField.useNativeValidation = this.useNativeValidation
      this.mdcTextField.valid = this.valid
      this.mdcTextField.disabled = this.disabled
      this.$nextTick(() => { // wait for the DOM change
        // todo: tell all the children that the parent is initialized
      })
    },
    getLabel () {
      return this.mdcTextField.label_
    },
    getLineRipple () {
      return this.mdcTextField.lineRipple_
    },
    getOutline () {
      return this.mdcTextField.outline_
    },
    getHelperText () {
      return this.mdcTextField.helperText_
    },
    getCharacterCounter () {
      return this.mdcTextField.characterCounter_
    },
    getLeadingIcon () {
      return this.mdcTextField.leadingIcon_
    },
    getTrailingIcon () {
      return this.mdcTextField.trailingIcon_
    }
  }
}
</script>
