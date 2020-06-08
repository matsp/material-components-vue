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
  data () {
    return {
      mdcRipple: undefined
    }
  },
  computed: {
    classes () {
      return {
        'mdc-button': true,
        'mdc-button--raised': this.raised,
        'mdc-button--unelevated': this.unelevated,
        'mdc-button--outlined': this.outlined
      }
    }
  },
  watch: {
    ripple () {
      this.destroy()
      this.instantiate()
    },
    classes () {
      this.destroy()
      this.instantiate()
    },
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
  beforeDestroy () {
    this.destroy()
  },
  deactivated () {
    this.destroy()
  },
  methods: {
    instantiate () {
      if (this.ripple) {
        this.mdcRipple = MDCRipple.attachTo(this.$el)
        this.mdcRipple.unbounded = this.unbounded
      }
    },
    destroy () {
      if (typeof this.mdcRipple === 'object' && typeof this.mdcRipple.destroy === 'function') {
        this.mdcRipple.destroy()
      }
    }
  },
  render (h) {
    let tag = 'button'
    const data = {
      class: this.classes,
      attrs: this.$attrs,
      on: this.$listeners
    }
    if (this.href.length > 0) {
      tag = 'a'
      data.attrs.href = this.href
    }
    const children = [h('div', {
      class: {
        'mdc-button__ripple': true
      }
    })]
    const headingIcon = this.$scopedSlots.headingIcon ? this.$scopedSlots.headingIcon() : null
    if (headingIcon != null && headingIcon.length > 0) {
      if (headingIcon[0].data.class == null) headingIcon[0].data.class = {}
      headingIcon[0].data.class['mdc-button__icon'] = true
      if (headingIcon[0].data.attrs == null) headingIcon[0].data.attrs = {}
      headingIcon[0].data.attrs['aria-hidden'] = 'true'
      children.push(headingIcon[0])
    }
    children.push(h('span', {
      class: {
        'mdc-button__label': true
      }
    }, this.$scopedSlots.default()))
    const trailingIcon = this.$scopedSlots.trailingIcon ? this.$scopedSlots.trailingIcon() : null
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
