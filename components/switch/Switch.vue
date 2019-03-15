<template>
  <div
    :class="classes"
    class="mdc-switch">
    <div class="mdc-switch__track"/>
    <div class="mdc-switch__thumb-underlay">
      <div class="mdc-switch__thumb">
        <input
                :disabled="disabled"
                :id="id"
                class="mdc-switch__native-control"
                role="switch"
                type="checkbox"
                v-model="model">
      </div>
    </div>
  </div>
</template>

<script>
  import { MDCSwitch } from '@material/switch'
  import { baseComponentMixin, themeClassMixin } from '../base'

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
    },
    id: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      mdcSwitch: undefined
    }
  },
  computed: {
    classes () {
      return {
        'mdc-switch--disabled': this.disabled
      }
    },
    model: {
      get () {
        return this.checked
      },
      set (state) {
        this.$emit('change', state)
      }
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
