<template>
  <div class="mdc-radio">
    <input
      :class="classes"
      :name="name"
      v-bind="$attrs"
      :checked="checked"
      :disabled="disabled"
      class="mdc-radio__native-control"
      type="radio"
      @change="onChange">
    <div class="mdc-radio__background">
      <div class="mdc-radio__outer-circle"/>
      <div class="mdc-radio__inner-circle"/>
    </div>
  </div>
</template>

<script>
import { MDCRadio } from '@material/radio'

import { baseComponentMixin, themeClassMixin } from '../base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  model: {
    prop: 'picked',
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
    value: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      mdcRadio: undefined
    }
  },
  computed: {
    classes () {
      return {
        'mdc-radio--disabled': this.disabled
      }
    }
  },
  watch: {
    checked () {
      this.mdcRadio.checked = this.checked
    },
    disabled () {
      this.mdcRadio.disabled = this.disabled
    }
  },
  mounted () {
    this.mdcRadio = MDCRadio.attachTo(this.$el)
    this.mdcRadio.checked = this.checked
    this.mdcRadio.disabled = this.disabled
    this.mdcRadio.value = this.value
  },
  beforeDestroy () {
    this.mdcRadio.destroy()
  },
  methods: {
    onChange (event) {
      this.$emit('change', this.mdcRadio.value)
    }
  }
}
</script>
