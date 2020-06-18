<template>
  <span
    :class="classes"
    class="mdc-floating-label"
    v-bind="$attrs"
  >
    <slot />
  </span>
</template>

<script>
import { MDCFloatingLabel } from '@material/floating-label'

import { baseComponentMixin, themeClassMixin } from '../base'
import destroyHelper from '../../utils/destroyHelper'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  inject: {
    getLabel: {
      default: null
    }
  },
  props: {
    floatAbove: {
      type: Boolean,
      default: false
    },
    shake: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      return {
        'mdc-floating-label--float-above': this.floatAbove,
        'mdc-floating-label--shake': this.shake
      }
    }
  },
  mounted () {
    if (this.getLabel) {
      this.getLabel(this.$el, this.instantiateCallback)
    } else {
      this.instantiateItself()
    }
  },
  activated () {
    if (this.getLabel) {
      this.getLabel(this.$el, this.instantiateCallback)
    } else {
      this.instantiateItself()
    }
  },
  updated () {
    if (this.getLabel) {
      this.getLabel(this.$el, this.instantiateCallback)
    } else {
      this.instantiateItself()
    }
  },
  deactivated () {
    this.destroy()
  },
  beforeDestroy () {
    this.destroy()
  },
  methods: {
    getWidth () {
      if (this.mdcFloatingLabel) {
        return this.mdcFloatingLabel.getWidth()
      }
    },
    instantiateItself () {
      if (this.mdcFloatingLabel == null) {
        this.mdcFloatingLabel = MDCFloatingLabel.attachTo(this.$el)
      }
    },
    instantiateCallback (instance) {
      this.mdcFloatingLabel = instance
    },
    destroy () {
      destroyHelper(this, 'mdcFloatingLabel')
    }
  }
}
</script>
