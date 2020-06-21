<script>
import { MDCTextField } from '@material/textfield'

import classMatchInVnodesPredicate from '../../utils/classMatchInVnodesPredicate'
import destroyHelper from '../../utils/destroyHelper'

import { baseComponentMixin, themeClassMixin } from '../base'

import NotchedOutline from '../notched-outline/NotchedOutline'
import FloatingLabel from '../floating-label/FloatingLabel'

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
      getOutline: this.getOutline
    }
  },
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    fullWidth: {
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
    },
    endAlign: {
      type: Boolean,
      default: false
    },
    ltrText: {
      type: Boolean,
      default: false
    },
    prefixText: {
      type: String,
      default: ''
    },
    suffixText: {
      type: String,
      default: ''
    }
  },
  computed: {
    inputValue () {
      return String(this.value)
    }
  },
  watch: {
    inputValue (v) {
      // calling the instance method to insure correct animation and/or behaviors
      this.preventReInstantiate = true
      this.mdcTextField.value = v
    },
    disabled (v) {
      this.preventReInstantiate = true
      this.mdcTextField.disabled = v
    },
    useNativeValidation (v) {
      this.preventReInstantiate = true
      this.mdcTextField.useNativeValidation = v
    },
    valid (v) {
      this.preventReInstantiate = true
      this.mdcTextField.valid = v
    }
  },
  created () {
    this.labelMap = new WeakMap()
    this.lineRippleMap = new WeakMap()
    this.outlineMap = new WeakMap()
  },
  mounted () {
    this.instantiate()
    this.preventReInstantiate = true
  },
  activated () {
    this.instantiate()
  },
  beforeUpdate () {
    if (!this.preventReInstantiate) {
      this.destroy()
    }
  },
  updated () {
    if (!this.preventReInstantiate) {
      this.instantiate()
    }
    this.preventReInstantiate = false
  },
  deactivated () {
    this.destroy()
  },
  beforeDestroy () {
    this.destroy()
  },
  methods: {
    instantiate () {
      if (this.mdcTextField == null) {
        this.mdcTextField = MDCTextField.attachTo(this.$el)
        if (this.mdcTextField.label_) {
          this.labelMap.get(this.mdcTextField.label_.root_)(
            this.mdcTextField.label_
          )
        }
        if (this.mdcTextField.lineRipple_) {
          this.lineRippleMap.get(this.mdcTextField.lineRipple_.root_)(
            this.mdcTextField.lineRipple_
          )
        }
        if (this.mdcTextField.outline_) {
          this.outlineMap.get(this.mdcTextField.outline_.root_)(
            this.mdcTextField.outline_
          )
        }
        this.mdcTextField.useNativeValidation = this.useNativeValidation
        this.mdcTextField.valid = this.valid
      }
    },
    getLabel (el, cb) {
      this.labelMap.set(el, cb)
    },
    getLineRipple (el, cb) {
      this.lineRippleMap.set(el, cb)
    },
    getOutline (el, cb) {
      this.outlineMap.set(el, cb)
    },
    onInput (e) {
      this.preventReInstantiate = true
      this.$emit('model', e.target.value)
    },
    destroy () {
      destroyHelper(this, 'mdcTextField')
    },
    forceReInstantiate () {
      this.destroy()
      this.instantiate()
    }
  },
  render (h) {
    const labelMatchingPredicate = v =>
      classMatchInVnodesPredicate(v, 'mdc-floating-label') ||
      (v.componentOptions &&
        v.componentOptions.Ctor === FloatingLabel._Ctor[0]) ||
      (v.componentOptions &&
        v.componentOptions.tag.includes('floating-label')) ||
      (v.tag && v.tag.includes('floating-label'))

    const defaultSlot = this.$scopedSlots.default
      ? this.$scopedSlots.default().filter(i => !i.isComment)
      : []
    let isOutlined = false
    let label
    let id
    const outline = defaultSlot.find(
      v =>
        classMatchInVnodesPredicate(v, 'mdc-notched-outline') ||
        (v.componentOptions &&
          v.componentOptions.Ctor === NotchedOutline._Ctor[0]) ||
        (v.componentOptions &&
          v.componentOptions.tag.includes('notched-outline')) ||
        (v.tag && v.tag.includes('notched-outline'))
    )
    if (outline != null) {
      isOutlined = true
      if (outline.componentOptions) {
        label = outline.componentOptions.children.find(labelMatchingPredicate)
      }
      // todo : notched outline in raw html form
    }
    if (!isOutlined && !this.fullWidth) {
      label = defaultSlot.find(labelMatchingPredicate)
      if (
        label &&
        label.data &&
        label.data.attrs &&
        label.data.attrs.id != null
      ) {
        id = String(label.data.attrs.id)
      }
    }

    const children = []
    if (!isOutlined || this.fullWidth) {
      children.push(h('span', { staticClass: 'mdc-text-field__ripple' }))
    }

    const characterCounter = this.$scopedSlots.characterCounter ? this.$scopedSlots.characterCounter() : []
    if (this.textarea && !this.fullWidth) {
      children.push(...characterCounter)
    }

    const leadingIcon = this.$scopedSlots.leadingIcon
      ? this.$scopedSlots
        .leadingIcon()
        .filter(i => i.text == null && !i.isComment)
      : null
    if (leadingIcon != null && leadingIcon.length > 0) {
      leadingIcon[0].data.class = {
        ...leadingIcon[0].data.class,
        'mdc-text-field__icon': true,
        'mdc-text-field__icon--leading': true
      }
      children.push(leadingIcon[0])
    }

    if (this.prefixText.length > 0) {
      children.push(
        h('span', {
          staticClass: 'mdc-text-field__affix mdc-text-field__affix--prefix'
        },
        [this.prefixText]
        )
      )
    }

    if (this.textarea && !this.fullWidth) {
      children.push(
        h(
          'textarea',
          {
            staticClass: 'mdc-text-field__input',
            attrs: {
              disabled: this.disabled,
              'aria-labelledby': id,
              ...this.$attrs
            },
            on: {
              input: this.onInput,
              ...this.$listeners
            }
          },
          [this.value]
        )
      )
    } else {
      children.push(
        h('input', {
          staticClass: 'mdc-text-field__input',
          attrs: {
            value: this.value,
            disabled: this.disabled,
            'aria-labelledby': id,
            ...this.$attrs
          },
          on: {
            input: this.onInput,
            ...this.$listeners
          }
        })
      )
    }

    if (this.suffixText.length > 0) {
      children.push(
        h('span', {
          staticClass: 'mdc-text-field__affix mdc-text-field__affix--suffix'
        },
        [this.suffixText]
        )
      )
    }

    const trailingIcon = this.$scopedSlots.trailingIcon
      ? this.$scopedSlots
        .trailingIcon()
        .filter(i => i.text == null && !i.isComment)
      : null
    if (trailingIcon != null && trailingIcon.length > 0) {
      trailingIcon[0].data.class = {
        ...trailingIcon[0].data.class,
        'mdc-text-field__icon': true,
        'mdc-text-field__icon--trailing': true
      }
      children.push(trailingIcon[0])
    }

    if (!this.fullWidth && (isOutlined || label != null)) {
      children.push(...defaultSlot)
    }
    if (!isOutlined && this.$scopedSlots.bottomLine) {
      children.push(...this.$scopedSlots.bottomLine())
    }
    return h(
      'label',
      {
        staticClass: 'mdc-text-field',
        class: {
          'mdc-text-field--filled':
            (this.fullWidth || !isOutlined) && !this.textarea,
          'mdc-text-field--fullwidth':
            this.fullWidth && !isOutlined && !this.textarea,
          'mdc-text-field--outlined': !this.fullWidth && isOutlined,
          'mdc-text-field--no-label':
            !this.fullWidth && label == null && !this.textarea,
          'mdc-text-field--textarea': !this.fullWidth && this.textarea,
          'mdc-text-field--with-leading-icon':
            leadingIcon != null && leadingIcon.length > 0,
          'mdc-text-field--with-trailing-icon':
            trailingIcon != null && trailingIcon.length > 0,
          'mdc-text-field--end-aligned': this.endAlign,
          'mdc-text-field--ltr-text': this.ltrText,
          'mdc-text-field--label-floating':
            this.label &&
            !this.preventReInstantiate &&
            this.inputValue.length > 0 &&
            !this.fullWidth
        }
      },
      children
    )
  }
}
</script>
