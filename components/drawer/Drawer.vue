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
import { MDCComponent } from '@material/base/component'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  provide () {
    return {
      getList: this.getList
    }
  },
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
      mdcDrawer: undefined
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
    classes () {
      this.reInstantiation()
    },
    open (val) {
      if (this.mdcDrawer instanceof MDCDrawer) {
        this.mdcDrawer.open = val
      } else {
        this.reInstantiation()
      }
    },
    'mdcDrawer.open': function (val) {
      this.model = val
    }
  },
  mounted () {
    this.reInstantiation()
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
    },
    getList () {
      return this.mdcDrawer.list_
    },
    reInstantiation () {
      if (this.mdcDrawer instanceof MDCDrawer) this.mdcDrawer.destroy()
      if (this.open && (this.modal || this.dismissible)) {
        // lazy instantiation: instantiate at the first time opening
        this.mdcDrawer = MDCDrawer.attachTo(this.$el)
        this.mdcDrawer.open = this.open
        this.$nextTick(() => { // wait for the DOM change
        // tell all the children that the parent is initialized
          if (this.mdcDrawer.list_ instanceof MDCComponent) {
            this.mdcDrawer.list_.emit('_init')
          }
        })
      } else {
        this.mdcDrawer = undefined // wait for the moment when the drawer needs to be open and instantiate then
      }
    }
  }
}
</script>
