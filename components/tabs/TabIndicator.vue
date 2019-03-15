<template>
  <span
    :class="classes"
    class="mdc-tab-indicator"
  >
    <span
      :class="contentClasses"
      class="mdc-tab-indicator__content"
    >{{ icon }}</span>
  </span>
</template>

<script>
import { MDCTabIndicator } from '@material/tab-indicator'
import { baseComponentMixin, themeClassMixin } from '../base'

export default {
  name: 'TabIndicator',
  mixins: [baseComponentMixin, themeClassMixin],
  props: {
    fade: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      mdcTabIndicator: undefined
    }
  },
  computed: {
    contentClasses () {
      return {
        'mdc-tab-indicator__content--underline': this.icon === '',
        'mdc-tab-indicator__content--icon': this.icon !== '',
        'material-icons': this.icon !== ''
      }
    },
    classes () {
      return {
        'mdc-tab-indicator--fade': this.fade
      }
    }
  },
  watch: {
    active () {
      if (this.active) {
        this.mdcTabIndicator.activate()
      } else {
        this.mdcTabIndicator.deactivate()
      }
    }
  },
  mounted () {
    this.mdcTabIndicator = MDCTabIndicator.attachTo(this.$el)
    if (this.active) {
      this.mdcTabIndicator.activate()
    } else {
      this.mdcTabIndicator.deactivate()
    }
  },
  beforeDestroy () {
    this.mdcTabIndicator.destroy()
  }
}
</script>

<style scoped>

</style>
