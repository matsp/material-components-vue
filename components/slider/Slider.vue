<template>
  <div
    :aria-disabled="disabled"
    :class="classes"
    class="mdc-slider"
    role="slider"
    tabindex="0"
    v-bind="$attrs"
    @MDCSlider:change="onChange"
    @MDCSlider:input="onInput"
  >
    <div class="mdc-slider__track-container">
      <div class="mdc-slider__track" />
      <div
        v-if="displayMarkers"
        class="mdc-slider__track-marker-container"
      />
    </div>
    <div
      v-if="discrete"
      class="mdc-slider__thumb-container"
    >
      <div class="mdc-slider__pin">
        <span class="mdc-slider__pin-value-marker" />
      </div>
      <svg
        class="mdc-slider__thumb"
        width="21"
        height="21"
      >
        <circle
          cx="10.5"
          cy="10.5"
          r="7.875"
        />
      </svg>
      <div class="mdc-slider__focus-ring" />
    </div>
    <div
      v-else
      class="mdc-slider__thumb-container"
    >
      <svg
        class="mdc-slider__thumb"
        width="21"
        height="21"
      >
        <circle
          cx="10.5"
          cy="10.5"
          r="7.875"
        />
      </svg>
      <div class="mdc-slider__focus-ring" />
    </div>
  </div>
</template>

<script>
import { MDCSlider } from '@material/slider'

import { baseComponentMixin, themeClassMixin } from '@components/base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  model: {
    prop: 'value',
    event: 'update'
  },
  props: {
    displayMarkers: {
      type: Boolean,
      default: false
    },
    discrete: {
      type: Boolean,
      default: false
    },
    value: {
      type: Number,
      default: 0
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      validator: value => value > 0,
      default: 1
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      mdcSlider: undefined
    }
  },
  computed: {
    classes () {
      return {
        'mdc-slider--discrete': this.discrete,
        'mdc-slider--display-markers': this.displayMarkers
      }
    }
  },
  watch: {
    value () {
      this.mdcSlider.value = this.value
    },
    min () {
      this.mdcSlider.min = this.min
    },
    max () {
      this.mdcSlider.max = this.max
    },
    step () {
      this.mdcSlider.step = this.step
    },
    disabled () {
      this.mdcSlider.disabled = this.disabled
    }
  },
  mounted () {
    this.mdcSlider = MDCSlider.attachTo(this.$el)
    this.mdcSlider.value = this.value
    this.mdcSlider.min = this.min
    this.mdcSlider.max = this.max
    this.mdcSlider.step = this.step
    this.mdcSlider.disabled = this.disabled
  },
  beforeDestroy () {
    this.mdcSlider.destroy()
  },
  methods: {
    onInput () {
      this.$emit('input', this.mdcSlider.value)
      this.$emit('update', this.mdcSlider.value)
    },
    onChange () {
      this.$emit('change', this.mdcSlider.value)
    }
  }
}
</script>
