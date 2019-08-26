<template>
  <aside
    :class="classes"
    class="mdc-drawer"
    @MDCDrawer:closed="onClosed"
    @MDCDrawer:opened="onOpened"
  >
    <div
      v-if="$slots.header || title !== '' || subtitle !== ''"
      class="mdc-drawer__header"
    >
      <h3
        v-if="title !== ''"
        class="mdc-drawer__title"
      >
        {{ title }}
      </h3>
      <h6
        v-if="subtitle !== ''"
        class="mdc-drawer__subtitle"
      >
        {{ subtitle }}
      </h6>
      <slot name="header" />
    </div>
    <slot />
  </aside>
</template>

<script>
import { baseComponentMixin, themeClassMixin } from '../base'
import { MDCDrawer } from '@material/drawer'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  model: {
    prop: 'open',
    event: 'change'
  },
  props: {
    modal: {
      type: Boolean,
      default: false
    },
    dismissible: {
      type: Boolean,
      default: false
    },
    open: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      mdcDrawer: undefined,
      hasHeaderClass: false
    }
  },
  computed: {
    classes () {
      return {
        'mdc-drawer--dismissible': this.dismissible,
        'mdc-drawer--modal': this.modal
      }
    },
    model: {
      get () {
        return this.open
      },
      set (value) {
        this.$emit('change', value)
      }
    }
  },
  watch: {
    modal () {
      if (!this.modal) {
        this.mdcDrawer.destroy()
        this.mdcDrawer = undefined
      } else {
        this.$nextTick(function () {
          this.mdcDrawer = new MDCDrawer(this.$el)
        })
      }
    },
    dismissible () {
      if (!this.dismissible) {
        this.mdcDrawer.destroy()
        this.mdcDrawer = undefined
      } else {
        this.$nextTick(function () {
          this.mdcDrawer = new MDCDrawer(this.$el)
        })
      }
    },
    open () {
      if (this.mdcDrawer.open !== this.open) this.mdcDrawer.open = this.open
    },
    'mdcDrawer.open': function () {
      this.model = this.mdcDrawer.open
    }
  },
  mounted () {
    // to avoid error throw by focus trap
    this.$nextTick(function () {
      if (!this.mdcDrawer && (this.dismissible || this.modal)) { this.mdcDrawer = new MDCDrawer(this.$el) }
    })
  },
  provide: {
    mdcDrawer: this
  },
  beforeDestroy () {
    if (this.mdcDrawer) this.mdcDrawer.destroy()
  },
  methods: {
    onClosed () {
      if (this.model) this.model = false
      this.$emit('closed')
    },
    onOpened () {
      this.$emit('opened')
    }
  }
}
</script>
