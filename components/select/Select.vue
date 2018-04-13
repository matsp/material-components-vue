<template>
  <div
    :class="classes"
    class="mdc-select">
    <select
      class="mdc-select__native-control"
      :disabled="disabled"
      v-bind="$attrs"
      @change="onChange">
      <option
        value=""
        disabled
        selected
        v-if="$slots['label']"/>
      <slot/>
    </select>
    <slot name="label"/>
    <slot name="bottomLine"/>
  </div>
</template>

<script>
import { MDCSelect } from '@material/select'

import themeClassMixin from '../base/themeClassMixin.js'

export default {
  mixins: [themeClassMixin],
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    box: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      mdcSelect: null
    }
  },
  computed: {
    classes () {
      return {
        'mdc-select--box': this.box,
        'mdc-select--disabled': this.disabled
      }
    }
  },
  mounted () {
    this.mdcSelect = MDCSelect.attachTo(this.$el)
  },
  beforeDestroy () {
    this.mdcSelect.destroy()
  },
  methods: {
    onChange (event) {
      this.$emit('change', event.target.value)
    }
  }
}
</script>
