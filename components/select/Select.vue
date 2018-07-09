<template>
  <div
    :class="classes"
    class="mdc-select">
    <select
      :disabled="disabled"
      v-bind="$attrs"
      class="mdc-select__native-control"
      @change="onChange">
      <option
        v-if="$slots['label']"
        value=""
        disabled
        selected/>
      <slot/>
    </select>
    <slot name="label"/>
    <slot name="line"/>
  </div>
</template>

<script>
import { MDCSelect } from '@material/select'

import { baseComponentMixin, themeClassMixin } from '../base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
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
    },
    outlined: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      mdcSelect: undefined
    }
  },
  computed: {
    classes () {
      return {
        'mdc-select--box': this.box,
        'mdc-select--disabled': this.disabled,
        'mdc-select--outlined': this.outlined
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
