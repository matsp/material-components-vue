<template>
  <div
    class="mdc-switch"
  >
    <div class="mdc-switch__track" />
    <div class="mdc-switch__thumb-underlay">
      <div class="mdc-switch__thumb">
        <input
          v-model="model"
          v-bind="$attrs"
          :disabled="disabled"
          class="mdc-switch__native-control"
          role="switch"
          type="checkbox"
        >
      </div>
    </div>
  </div>
</template>

<script>
import { MDCSwitch } from '@material/switch'
import { baseComponentMixin, themeClassMixin } from '@components/base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      mdcSwitch: undefined
    }
  },
  computed: {
    model: {
      get () {
        return this.checked
      },
      set (state) {
        this.$emit('change', state)
      }
    }
  },
  watch: {
    disabled (newVal) {
      this.mdcSwitch.disabled = newVal
    },
    checked (newVal) {
      this.mdcSwitch.checked = newVal
    }
  },
  mounted () {
    this.mdcSwitch = MDCSwitch.attachTo(this.$el)
    this.mdcSwitch.checked = this.checked
    this.mdcSwitch.disabled = this.disabled
  },
  beforeDestroy () {
    this.mdcSwitch.destroy()
  }
}
</script>
