<template>
  <ul
    :class="classes"
    class="mdc-list"
    v-bind="$attrs"
  >
    <slot />
  </ul>
</template>

<script>
import { baseComponentMixin, themeClassMixin } from '../base'
import { MDCList } from '@material/list'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  props: {
    avatar: {
      type: Boolean,
      default: false
    },
    dense: {
      type: Boolean,
      default: false
    },
    twoLine: {
      type: Boolean,
      default: false
    },
    nonInteractive: {
      type: Boolean,
      default: false
    },
    singleSelection: {
      type: Boolean,
      default: false
    },
    vertical: {
      type: Boolean,
      default: true
    },
    wrapFocus: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      mdcList: undefined
    }
  },
  computed: {
    classes () {
      return {
        'mdc-list--dense': this.dense,
        'mdc-list--two-line': this.twoLine,
        'mdc-list--avatar-list': this.avatar,
        'mdc-list--non-interactive': this.nonInteractive
      }
    }
  },
  watch: {
    singleSelection () {
      if (this.mdcList) { this.mdcList.singleSelection = this.singleSelection }
    },
    vertical () {
      if (this.mdcList) { this.mdcList.vertical = this.vertical }
    },
    wrapFocus () {
      if (this.mdcList) { this.mdcList.wrapFocus = this.wrapFocus }
    }
  },
  mounted () {
    if (this.$parent.$options._componentTag !== 'm-menu') {
      this.mdcList = MDCList.attachTo(this.$el)
      this.mdcList.singleSelection = this.singleSelection
      this.mdcList.wrapFocus = this.wrapFocus
      this.mdcList.vertical = this.vertical
    } else {
      this.$el.setAttribute('tabindex', '0')
    }
  },
  beforeDestroy () {
    if (this.mdcList) this.mdcList.destroy()
  }
}
</script>
