<template>
  <div
    :class="classes"
    class="mdc-grid-list"
  >
    <ul class="mdc-grid-list__tiles">
      <slot />
    </ul>
  </div>
</template>

<script>

import { MDCGridList } from '@material/grid-list'

import { baseComponentMixin, themeClassMixin } from '../base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  props: {
    headerCaption: {
      type: Boolean,
      required: false
    },
    smallGutter: {
      type: Boolean,
      required: false
    },
    twolineCaption: {
      type: Boolean,
      required: false
    },
    startIcon: {
      type: Boolean,
      required: false
    },
    endIcon: {
      type: Boolean,
      required: false
    },
    ratio: {
      type: String,
      validator: (value) => ['1x1', '16x9', '2x3', '3x2', '4x3', '3x4'].indexOf(value) > -1,
      default: '1x1'
    }
  },
  data () {
    return {
      mdcGridList: undefined
    }
  },
  computed: {
    classes () {
      const def = {
        'mdc-grid-list--header-caption': this.headerCaption,
        'mdc-grid-list--tile-gutter-1': this.smallGutter,
        'mdc-grid-list--twoline-caption': this.twolineCaption,
        'mdc-grid-list--with-icon-align-start': this.startIcon,
        'mdc-grid-list--with-icon-align-end': this.endIcon
      }

      const calc = {}
      if (this.ratio) { calc['mdc-grid-list--tile-aspect-' + this.ratio] = true }

      return { ...def, ...calc }
    }
  },
  mounted () {
    this.mdcGridList = MDCGridList.attachTo(this.$el)
  },
  beforeDestroy () {
    this.mdcGridList.destroy()
  }

}
</script>
