<template>
  <i
    :class="classes"
    :data-toggle-on="dataToggleOn"
    :data-toggle-off="dataToggleOff"
    class="mdc-icon-toggle material-icons"
    role="button"
    @click="onClick" >
    {{ value?iconOn:iconOff }}
  </i>
</template>

<script>
import { MDCIconToggle } from '@material/icon-toggle'
import { debounce } from '../'

import { baseComponentMixin, themeClassMixin } from '../base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  props: {
    iconOn: {
      type: String,
      required: true
    },
    iconOff: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    value: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data () {
    return {
      mdcIconToggle: undefined
    }
  },
  computed: {
    classes () {
      return {
        'mdc-icon-toggle--disabled': this.disabled
      }
    },
    dataToggleOn () {
      return JSON.stringify({ 'content': this.iconOn })
    },
    dataToggleOff () {
      return JSON.stringify({ 'content': this.iconOff })
    }
  },
  watch: {
    disabled () {
      this.mdcIconToggle.disabled = this.disabled
    },
    value () {
      this.mdcIconToggle.on = this.value
    }
  },
  mounted () {
    this.mdcIconToggle = MDCIconToggle.attachTo(this.$el)
    this.mdcIconToggle.disabled = this.disabled
    this.mdcIconToggle.on = this.value
  },
  destroy () {
    this.mdcIconToggle.destroy()
  },
  methods: {
    onClick () {
      debounce(this.$emit('input', !this.value))
    }
  }
}
</script>
