<script>
import { MDCRipple } from '@material/ripple'
import { MDCIconButtonToggle } from '@material/icon-button'

import { baseComponentMixin, themeClassMixin } from '../base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    href: {
      type: String,
      default: ''
    },
    ripple: {
      type: Boolean,
      default: true
    },
    unbounded: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      mdcIconButtonToggle: undefined,
      mdcRipple: undefined
    }
  },
  watch: {
    value (value) {
      if (this.mdcIconButtonToggle instanceof MDCIconButtonToggle) {
        this.mdcIconButtonToggle.on = value
      }
    },
    ripple (value) {

    },
    unbounded (value) {
      if (this.mdcRipple instanceof MDCRipple) {
        this.mdcRipple.unbounded = value
      }
      if (this.mdcIconButtonToggle instanceof MDCIconButtonToggle) {
        this.mdcIconButtonToggle.unbounded = value
      }
    }
  },
  mounted () {

  },
  beforeDestroy () {

  },
  methods: {
    updateIsToggleButton () {
      this.isToggleButton = this.$slots.toggleOn != null && this.$slots.toggleOff != null
    }
  }
}
</script>
