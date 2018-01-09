<template>
  <i @click="onClick" class="mdc-icon-toggle material-icons" :class="classes"
     role="button" :data-toggle-on="dataToggleOn" :data-toggle-off="dataToggleOff" >
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
      required: false
    },
    primary: {
      type: Boolean,
      required: false
    },
    accent: {
      type: Boolean,
      required: false
    },
    value: {
      type: Boolean,
      required: false
    }
  },
  data () {
    return {
      mdcIconToggle: null
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
  computed: {
    classes () {
      return {
        'mdc-icon-toggle--disabled': this.disabled,
        'mdc-icon-toggle--primary': this.primary,
        'mdc-icon-toggle--accent': this.accent
      }
    },
    dataToggleOn () {
      return JSON.stringify({ 'content': this.iconOn })
    },
    dataToggleOff () {
      return JSON.stringify({ 'content': this.iconOff })
    }
  },
  methods: {
    onClick () {
      debounce(this.$emit('input', !this.value))
    }
  },
  watch: {
    disabled () {
      this.mdcIconToggle.disabled = this.disabled
    },
    value () {
      this.mdcIconToggle.on = this.value
    }
  }
}
</script>

<style lang="scss" >
@import "@material/icon-toggle/mdc-icon-toggle";
</style>
