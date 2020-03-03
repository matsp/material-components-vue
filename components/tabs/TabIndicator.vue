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
import { baseComponentMixin, themeClassMixin } from '@components/base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  inject: ['getIndicator'],
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
        'mdc-tab-indicator--fade': this.fade,
        'mdc-tab-indicator--active': this.active
      }
    }
  },
  watch: {
    active (val) {
      if (this.mdcTabIndicator == null) this.mdcTabIndicator = this.getIndicator()
      if (val) {
        this.mdcTabIndicator.activate()
      } else {
        this.mdcTabIndicator.deactivate()
      }
    }
  },
  mounted () {
    if (!(this.getIndicator instanceof Function)) { // standalone
      this.mdcTabIndicator = MDCTabIndicator.attachTo(this.$el)
    }
    // todo: get instance from parent <m-tab> when mounted
  },
  beforeDestroy () {
    if (this.mdcTabIndicator) this.mdcTabIndicator.destroy()
  }
}
</script>

<style scoped>

</style>
