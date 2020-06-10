<script>
import { MDCRipple } from '@material/ripple'
import { MDCIconButtonToggle } from '@material/icon-button'

import { baseComponentMixin, themeClassMixin } from '../base'

import modifierAssign from '../../utils/modifierAssign'
import trimTextVnodes from '../../utils/trimTextVnodes'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
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
      default: true
    }
  },
  watch: {
    value (value) {
      if (this.mdcIconButtonToggle instanceof MDCIconButtonToggle) {
        this.mdcIconButtonToggle.on = value
      }
    },
    ripple (value) {
      this.destroy()
      this.instantiate()
    },
    unbounded (value) {
      if (this.mdcRipple != null) {
        this.mdcRipple.unbounded = value
      }
      if (this.mdcIconButtonToggle != null) {
        this.mdcIconButtonToggle.unbounded = value
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
    if (!this.preventReRender) {
      this.destroy()
    }
  },
  updated () {
    if (!this.preventReRender) {
      this.instantiate()
    }
    this.preventReRender = false
  },
  deactivated () {
    this.destroy()
  },
  beforeDestroy () {
    this.destroy()
  },
  methods: {
    instantiate () {
      if (this.isToggleButton && this.mdcIconButtonToggle == null) {
        this.mdcIconButtonToggle = MDCIconButtonToggle.attachTo(this.$el)
        this.mdcIconButtonToggle.unbounded = this.unbounded
        return
      }
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
      if (this.mdcIconButtonToggle != null && typeof this.mdcIconButtonToggle === 'object' && typeof this.mdcIconButtonToggle.destroy === 'function') {
        this.mdcIconButtonToggle.destroy()
        this.mdcIconButtonToggle = null
      }
    },
    onChange (eventData) {
      this.preventReRender = true
      this.$emit('change', eventData.detail.isOn)
    }
  },
  render (h) {
    let children

    this.isToggleButton = this.$scopedSlots.toggleOn != null && this.$scopedSlots.toggleOff != null
    if (this.isToggleButton) {
      const toggleOn = this.$scopedSlots.toggleOn()
      modifierAssign(toggleOn, 'mdc-icon-button__icon', 'mdc-icon-button__icon--on')
      const toggleOff = this.$scopedSlots.toggleOff()
      modifierAssign(toggleOff, 'mdc-icon-button__icon')
      children = [...toggleOn, ...toggleOff]
    } else {
      children = this.$scopedSlots.default ? trimTextVnodes(this.$scopedSlots.default()) : [] // IE11 will not center the icon properly if there is a newline or space after the material icon text. So trim it.
    }

    let tag = 'button'

    let data

    if (this.preventReRender) {
      data = {
        class: {
          'mdc-icon-button': true,
          'mdc-icon-button--on': this.defaultToBeOn // to avoid classes being manipulate by vue
        },
        attrs: this.$attrs,
        on: this.$listeners
      }
    } else {
      data = {
        class: {
          'mdc-icon-button': true,
          'mdc-icon-button--on': this.isToggleButton && this.value
        },
        attrs: this.$attrs,
        on: this.$listeners
      }
      this.defaultToBeOn = this.isToggleButton && this.value
    }
    if (this.href.length > 0) {
      tag = 'a'
      data.attrs.href = this.href
    }
    data.on['MDCIconButtonToggle:change'] = this.onChange

    return h(tag, data, children)
  }
}
</script>
