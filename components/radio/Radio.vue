<template>
  <div class="mdc-radio" :class="classes">
    <input
      class="mdc-radio__native-control"
      type="radio"
      v-bind="$attrs"
      v-on="$listeners"
      @change="onChange"
      ref="input"
    >
    <div class="mdc-radio__background">
      <div class="mdc-radio__outer-circle" />
      <div class="mdc-radio__inner-circle" />
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
    js: {
      type: Boolean,
      default: true
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
        'mdc-radio--disabled': this.$attrs.disabled != null
      }
    }
  },
  watch: {
    js () {
      this.reInstantiate()
    }
  },
  mounted () {
    if (this.js) this.mdcRadio = MDCRadio.attachTo(this.$el)
  },
  beforeDestroy () {
    if (this.js) this.mdcRadio.destroy()
  },
  methods: {
    onChange () {
      this.$emit('change', this.$refs.input.value)
    },
    reInstantiate () {
      if (this.js) {
        if (this.mdcRadio) {
          this.mdcRadio.destroy()
        }
        MDCRadio.attachTo(this.$el)
      } else {
        if (this.js) {
          this.mdcRadio.destroy()
        }
        this.mdcRadio = undefined
      }
    }
  }
}
</script>
