<template>
  <i
    @click="onClick"
    class="mdc-icon-toggle material-icons"
    :class="classes"
    role="button"
    :data-toggle-on="dataToggleOn"
    :data-toggle-off="dataToggleOff" >
    {{ value?iconOn:iconOff }}
  </i>
</template>

<script>
import { MDCIconToggle } from '@material/icon-toggle'
import { debounce } from '../utils'

export default {
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
      mdcIconToggle: null
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

<style lang="scss" >
@import "@material/icon-toggle/mdc-icon-toggle";
</style>
