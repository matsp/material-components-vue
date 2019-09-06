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
    },
    iconClass: {
      type: String,
      default: 'material-icons'
    }
  },
  data () {
    return {
      mdcTabIndicator: undefined
    }
  },
  computed: {
    contentClasses () {
      const isUnderline = this.icon === '' && this.iconClass === 'material-icons'
      const result = {
        'mdc-tab-indicator__content--underline': isUnderline,
        'mdc-tab-indicator__content--icon': !isUnderline
      }
      this.iconClass.split(' ').filter(c => c.length > 0).forEach(c => {
        result[c] = true
      })
      return result
    },
    classes () {
      return {
        'mdc-tab-indicator--fade': this.fade
      }
    }
  },
  watch: {
    active (val) {
      if (val) {
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
    if (this.mdcTabIndicator) this.mdcTabIndicator.destroy()
  }
}
</script>

<style scoped>

</style>
