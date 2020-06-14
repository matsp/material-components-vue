<script>
import { MDCRipple } from '@material/ripple'
import { baseComponentMixin, themeClassMixin } from '../base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  props: {
    /**
     * Optional. Styles a contained button that is elevated above the surface.
     */
    raised: {
      type: Boolean,
      default: false
    },
    /**
     * Optional. Styles a contained button that is flush with the surface.
     */
    unelevated: {
      type: Boolean,
      default: false
    },
    /**
     * Optional. Styles an outlined button that is flush with the surface.
     */
    outlined: {
      type: Boolean,
      default: false
    },
    href: {
      type: String,
      default: ''
    },
    ripple: {
      type: Boolean,
      default: true
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
    // usually when user add or remove a class on the root DOM($el), this hook will be called and the ripple needs re-instantiation
    // if only the slots change, it doesn't have to re-instantiate
    // it's hard to judge, so re-instantiate it whatever
    this.destroy()
  },
  updated () {
    if (this.ripple) {
      this.instantiate()
    }
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
    let tag = 'button'
    const data = {
      class: {
        'mdc-button': true,
        'mdc-button--raised': this.raised,
        'mdc-button--unelevated': this.unelevated,
        'mdc-button--outlined': this.outlined
      },
      attrs: this.$attrs,
      on: this.$listeners
    }
    if (this.href.length > 0) {
      tag = 'a'
      data.attrs.href = this.href
    }
    const children = [h('div', {
      staticClass: 'mdc-button__ripple'
    })]
    const leadingIcon = this.$scopedSlots.leadingIcon ? this.$scopedSlots.leadingIcon().filter(i => (i.text == null || i.text.trim() === '') && !i.isComment) : null
    if (leadingIcon != null && leadingIcon.length > 0) {
      if (leadingIcon[0].data.class == null) leadingIcon[0].data.class = {}
      leadingIcon[0].data.class['mdc-button__icon'] = true
      if (leadingIcon[0].data.attrs == null) leadingIcon[0].data.attrs = {}
      leadingIcon[0].data.attrs['aria-hidden'] = 'true'
      children.push(leadingIcon[0])
    }
    children.push(h('span', {
      class: {
        'mdc-button__label': true
      }
    }, this.$scopedSlots.default()))
    const trailingIcon = this.$scopedSlots.trailingIcon ? this.$scopedSlots.trailingIcon().filter(i => (i.text == null || i.text.trim() === '') && !i.isComment) : null
    if (trailingIcon != null && trailingIcon.length > 0) {
      if (trailingIcon[0].data.class == null) trailingIcon[0].data.class = {}
      trailingIcon[0].data.class['mdc-button__icon'] = true
      if (trailingIcon[0].data.attrs == null) trailingIcon[0].data.attrs = {}
      trailingIcon[0].data.attrs['aria-hidden'] = 'true'
      children.push(trailingIcon[0])
    }
    return h(
      tag,
      data,
      children
    )
  }
}
</script>
