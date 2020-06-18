<template>
  <span class="mdc-notched-outline">
    <span class="mdc-notched-outline__leading" />
    <span class="mdc-notched-outline__notch">
      <slot />
    </span>
    <span class="mdc-notched-outline__trailing" />
  </span>
</template>
<script>
import { MDCNotchedOutline } from '@material/notched-outline'
import { baseComponentMixin, themeClassMixin } from '../base'
import destroyHelper from '../../utils/destroyHelper'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  inject: {
    getOutline: {
      default: null
    }
  },
  mounted () {
    if (this.getOutline) {
      this.getOutline(this.$el, this.instantiateCallback)
    } else {
      this.instantiateItself()
    }
  },
  activated () {
    if (this.getOutline) {
      this.getOutline(this.$el, this.instantiateCallback)
    } else {
      this.instantiateItself()
    }
  },
  updated () {
    if (this.getOutline) {
      this.getOutline(this.$el, this.instantiateCallback)
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
      if (this.mdcNotchedOutline == null) {
        this.mdcNotchedOutline = MDCNotchedOutline.attachTo(this.$el)
      }
    },
    instantiateCallback (instance) {
      this.mdcNotchedOutline = instance
    },
    destroy () {
      destroyHelper(this, 'mdcNotchedOutline')
    },
    notch (notchWidth) {
      if (this.mdcNotchedOutline) {
        this.mdcNotchedOutline.notch(notchWidth)
      }
    },
    closeNotch () {
      if (this.mdcNotchedOutline) {
        this.mdcNotchedOutline.closeNotch()
      }
    }
  }
}
</script>
