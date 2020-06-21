<script>
import { MDCRipple } from '@material/ripple'

import { baseComponentMixin, themeClassMixin } from '../base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  props: {
    mini: {
      type: Boolean,
      default: false
    },
    exited: {
      type: Boolean,
      default: false
    },
    ripple: {
      type: Boolean,
      default: true
    },
    href: {
      type: String,
      default: ''
    },
    unbounded: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    unbounded (value) {
      if (this.ripple) {
        this.mdcRipple.unbounded = value
      }
    }
  },
  mounted () {
    this.instantiate()
  },
  activated () {
    this.instantiate()
  },
  beforeUpdate () {
    if (this.preventReInstantiate) return
    this.destroy()
  },
  updated () {
    if (this.ripple) {
      this.instantiate()
    }
    this.preventReInstantiate = false
  },
  beforeDestroy () {
    this.destroy()
  },
  deactivated () {
    this.destroy()
  },
  methods: {
    instantiate () {
      if (this.ripple && this.mdcRipple == null) {
        this.mdcRipple = MDCRipple.attachTo(this.$el)
        this.mdcRipple.unbounded = this.unbounded
      }
    },
    destroy () {
      if (this.mdcRipple != null && typeof this.mdcRipple === 'object' && typeof this.mdcRipple.destroy === 'function') {
        this.mdcRipple.destroy()
        this.mdcRipple = null
      }
    }
  },
  render (h) {
    let defaultSlot, extended
    if (this.$scopedSlots.default) {
      defaultSlot = this.$scopedSlots.default().filter(v => !v.isComment && (v.text == null || v.text.trim() !== ''))
      extended = defaultSlot.length > 0
    }
    const data = {
      staticClass: 'mdc-fab',
      class: {
        'mdc-fab--mini': this.mini,
        'mdc-fab--exited': this.exited,
        'mdc-fab--extended': extended
      },
      attrs: {
        ...this.$attrs
      },
      on: {
        ...this.$listeners
      }
    }
    let tag = 'button'
    if (this.href !== '') {
      tag = 'a'
      data.attrs.href = this.href
    }
    const children = [[h('div', {
      staticClass: 'mdc-fab__ripple'
    })]]
    const icon = this.$scopedSlots.icon ? this.$scopedSlots.icon().filter(i => i.text == null && !i.isComment) : null
    if (icon != null && icon.length > 0) {
      if (icon[0].data.class == null) icon[0].data.class = {}
      icon[0].data.class['mdc-fab__icon'] = true
      children.push(icon[0])
    }
    if (extended) {
      children.push(h('span', {
        staticClass: 'mdc-fab__label'
      }, defaultSlot))
    }
    const trailingIcon = this.$scopedSlots.trailingIcon ? this.$scopedSlots.trailingIcon().filter(i => i.text == null && !i.isComment) : null
    if (trailingIcon != null && trailingIcon.length > 0) {
      if (trailingIcon[0].data.class == null) trailingIcon[0].data.class = {}
      trailingIcon[0].data.class['mdc-fab__icon'] = true
      children.push(trailingIcon[0])
    }
    if (this.extended === extended) this.preventReInstantiate = true
    this.extended = extended
    return h(tag, data, children)
  }
}
</script>
