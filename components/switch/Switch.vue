<template>
  <div
    :class="classes"
    class="mdc-switch">
    <input
      v-model="model"
      :disabled="disabled"
      type="checkbox"
      class="mdc-switch__native-control" >
    <div class="mdc-switch__background">
      <div class="mdc-switch__knob"/>
    </div>
  </div>
</template>

<script>
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
      required: false
    },
    disabled: {
      type: Boolean,
      required: false
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
  }
}
</script>
