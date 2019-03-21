<template>
  <a
    v-if="href !== ''"
    :href="href"
    :data-toggle-on-content="toggleOnContent"
    :data-toggle-on-label="toggleOnLabel"
    :data-toggle-on-class="toggleOnClass"
    :data-toggle-off-content="toggleOffContent"
    :data-toggle-off-label="toggleOffLabel"
    :data-toggle-off-class="toggleOffClass"
    v-bind="$attrs"
    class="mdc-icon-button"
    :class="classes"
    v-on="$listeners"
    @MDCIconButtonToggle:change="$emit('change', $event.detail.isOn)"
  >
    <slot v-if="isIconButton" />
    <slot
      v-if="isToggleButtonViaSlots && !value"
      name="toggleOn"
    />
    <slot
      v-if="isToggleButtonViaSlots && value"
      name="toggleOff"
    />
  </a>
  <button
    v-else
    :data-toggle-on-content="toggleOnContent"
    :data-toggle-on-label="toggleOnLabel"
    :data-toggle-on-class="toggleOnClass"
    :data-toggle-off-content="toggleOffContent"
    :data-toggle-off-label="toggleOffLabel"
    :data-toggle-off-class="toggleOffClass"
    v-bind="$attrs"
    class="mdc-icon-button"
    :class="classes"
    v-on="$listeners"
    @MDCIconButtonToggle:change="$emit('change', $event.detail.isOn)"
  >
    <template v-if="this.icon && this.icon !== ''">
      {{ icon }}
    </template>
    <slot v-if="isIconButton" />
    <slot
      v-if="isToggleButtonViaSlots && !value"
      name="toggleOn"
    />
    <slot
      v-if="isToggleButtonViaSlots && value"
      name="toggleOff"
    />
  </button>
</template>

<script>
import { MDCRipple } from '@material/ripple'
import { MDCIconButtonToggle } from '@material/icon-button'

import { baseComponentMixin, themeClassMixin } from '../base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    toggleOnContent: {
      type: String,
      default: ''
    },
    toggleOnLabel: {
      type: String,
      default: ''
    },
    toggleOnClass: {
      type: String,
      default: ''
    },
    toggleOffContent: {
      type: String,
      default: ''
    },
    toggleOffLabel: {
      type: String,
      default: ''
    },
    toggleOffClass: {
      type: String,
      default: ''
    },
    value: {
      type: Boolean,
      default: false
    },
    href: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      mdcIconButtonToggle: undefined,
      mdcRipple: undefined,
      slotObserver: undefined
    }
  },
  computed: {
    isToggleButtonViaSlots () {
      return this.$slots.toggleOn && this.$slots.toggleOff && !this.isIconButton
    },
    isIconButton () {
      return this.$slots.default
    },
    isToggleButton () {
      return this.toggleOnContent !== '' && this.toggleOffContent !== ''
    },
    classes () {
      return {
        'material-icons': this.icon && this.icon !== ''
      }
    }
  },
  watch: {
    value (value) {
      if (typeof this.mdcIconButtonToggle !== 'undefined') {
        this.mdcIconButtonToggle.on = value
      }
    }
  },
  mounted () {
    this.update()
    this.slotObserver = new MutationObserver(() => this.update())
    this.slotObserver.observe(this.$el, {
      childList: true,
      subtree: true
    })
  },
  beforeDestroy () {
    if (typeof this.mdcIconButtonToggle !== 'undefined') {
      this.mdcIconButtonToggle.destroy()
    }
    if (typeof this.mdcRipple !== 'undefined') {
      this.mdcRipple.destroy()
    }
    this.slotObserver.disconnect()
  },
  methods: {
    update () {
      if ((this.isToggleButton || this.isToggleButtonViaSlots) && typeof this.mdcIconButtonToggle === 'undefined') {
        this.mdcIconButtonToggle = MDCIconButtonToggle.attachTo(this.$el)
        this.mdcIconButtonToggle.on = this.value
      }
      if (this.isIconButton && typeof this.mdcRipple === 'undefined') {
        this.mdcRipple = MDCRipple.attachTo(this.$el)
        this.mdcRipple.unbounded = true
      }
    }
  }
}
</script>
