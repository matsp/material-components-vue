<template>
  <div
    class="mdc-radio"
  >
    <input
      class="mdc-radio__native-control"
      type="radio"
      v-bind="$attrs"
      :disabled="disabled"
      v-on="listeners"
      @change="$emit('change', $event.target.value)"
    >
    <div class="mdc-radio__background">
      <div class="mdc-radio__outer-circle" />
      <div class="mdc-radio__inner-circle" />
    </div>
    <div class="mdc-radio__ripple" />
  </div>
</template>

<script>
import { MDCRadio } from '@material/radio'

import { baseComponentMixin, themeClassMixin } from '../base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  inject: {
    formFieldInputAssigning: {
      default: null
    }
  },
  model: {
    prop: 'picked',
    event: 'change'
  },
  props: {
    ripple: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      mdcRadio: undefined
    }
  },
  computed: {
    listeners () {
      const _listeners = this.$listeners
      delete _listeners.change
      return _listeners
    }
  },
  watch: {
    ripple () {
      this.destroy()
      this.instantiate()
    },
    disabled (value) {
      if (typeof this.mdcRadio === 'object') {
        this.mdcRadio.disabled = value
      }
    }
  },
  mounted () {
    this.instantiate()
  },
  activated () {
    this.instantiate()
  },
  deactivated () {
    this.destroy()
  },
  beforeDestroy () {
    this.destroy()
  },
  methods: {
    instantiate () {
      if (this.ripple) {
        this.mdcRadio = MDCRadio.attachTo(this.$el)
        this.mdcRadio.disabled = this.disabled
        if (typeof this.formFieldInputAssigning === 'function') {
          this.formFieldInputAssigning(this.mdcRadio)
        }
      }
    },
    destroy () {
      if (typeof this.mdcRadio === 'object' && typeof this.mdcRadio.destroy === 'function') {
        this.mdcRadio.destroy()
        if (typeof this.formFieldInputAssigning === 'function') {
          this.formFieldInputAssigning(undefined)
        }
      }
    }
  }
}
</script>
