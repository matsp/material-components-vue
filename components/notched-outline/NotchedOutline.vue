<template>
  <div>
    <div
      ref="outline"
      :class="classes"
      class="mdc-notched-outline">
      <svg>
        <path class="mdc-notched-outline__path"/>
      </svg>
    </div>
    <div class="mdc-notched-outline__idle"/>
  </div>
</template>
<script>
import { MDCNotchedOutline } from '@material/notched-outline'
import { baseComponentMixin, themeClassMixin } from '../base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  props: {
    notched: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      mdcNotchedOutline: undefined
    }
  },
  computed: {
    classes () {
      return {
        'mdc-notched-outline--notched': this.notched
      }
    }
  },
  mounted () {
    this.mdcNotchedOutline = MDCNotchedOutline.attachTo(this.$refs.outline)
  },
  beforeDestroy () {
    if (typeof this.mdcNotchedOutline !== 'undefined') {
      this.mdcNotchedOutline.destroy()
    }
  }
}
</script>
