<template>
  <span class="mdc-line-ripple" />
</template>

<script>
import { MDCLineRipple } from '@material/line-ripple'

import { baseComponentMixin, themeClassMixin } from '../base'
import destroyHelper from '../../utils/destroyHelper'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  inject: {
    getLineRipple: {
      default: null
    }
  },
  props: {
    rippleCenter: {
      type: Number,
      default: null
    }
  },
  watch: {
    rippleCenter (xCoordinate) {
      if (this.mdcLineRipple) {
        this.mdcLineRipple.setRippleCenter(xCoordinate)
      }
    }
  },
  mounted () {
    if (this.getLineRipple) {
      this.getLineRipple(this.$el, this.instantiateCallback)
    } else {
      this.instantiateItself()
    }
  },
  activated () {
    if (this.getLineRipple) {
      this.getLineRipple(this.$el, this.instantiateCallback)
    } else {
      this.instantiateItself()
    }
  },
  updated () {
    if (this.getLineRipple) {
      this.getLineRipple(this.$el, this.instantiateCallback)
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
    instantiateItself () {
      if (this.mdcLineRipple == null) {
        this.mdcLineRipple = MDCLineRipple.attachTo(this.$el)
      }
    },
    instantiateCallback (instance) {
      this.mdcLineRipple = instance
    },
    destroy () {
      destroyHelper(this, 'mdcLineRipple')
    },
    activate () {
      if (this.mdcLineRipple) {
        this.mdcLineRipple.activate()
      }
    },
    deactivate () {
      if (this.mdcLineRipple) {
        this.mdcLineRipple.deactivate()
      }
    }
  }
}
</script>
