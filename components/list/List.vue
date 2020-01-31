<template>
  <ul
    v-if="tag === 'ul'"
    :class="classes"
    class="mdc-list"
    v-bind="$attrs"
    @MDCList:action="onAction"
    @_init="onParentInit"
  >
    <slot />
  </ul>
  <nav
    v-else-if="tag === 'nav'"
    :class="classes"
    class="mdc-list"
    v-bind="$attrs"
    @MDCList:action="onAction"
    @_init="onParentInit"
  >
    <slot />
  </nav>
  <div
    v-else-if="tag === 'div'"
    :class="classes"
    class="mdc-list"
    v-bind="$attrs"
    @MDCList:action="onAction"
    @_init="onParentInit"
  >
    <slot />
  </div>
</template>

<script>
import { baseComponentMixin, themeClassMixin } from '../base'
import { MDCList } from '@material/list'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  inject: {
    getList: {
      default: null
    }
  },
  model: {
    prop: 'selectedIndex',
    event: 'change'
  },
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
    },
    selectedIndex: {
      type: [Number, Array],
      default: -1
    },
    tag: {
      type: String,
      default: 'ul'
    },
    js: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      mdcList: undefined,
      slotObserver: undefined
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
      if (this.singleSelection) {
        this.$el.setAttribute('role', 'listbox')
        this.$slots.default.forEach((n) => {
          if (n.elm instanceof HTMLElement) {
            n.elm.setAttribute('role', 'option')
          }
        })
      }
      if (this.mdcList) { this.mdcList.singleSelection = this.singleSelection }
    },
    vertical () {
      if (this.mdcList) { this.mdcList.vertical = this.vertical }
    },
    wrapFocus () {
      if (this.mdcList) { this.mdcList.wrapFocus = this.wrapFocus }
    },
    selectedIndex () {
      if (this.mdcList && ((this.selectedIndex instanceof Number && this.selectedIndex > -1) || this.selectedIndex instanceof Array)) this.mdcList.selectedIndex = this.selectedIndex
    },
    js () {
      if (!(this.getList instanceof Function)) {
        this.reInstantiateList()
      } else {
        console.warn('Prop \'js\' is omitted when your <m-list> is placed inside a menu or drawer. The \'js\' prop won\'t take effect.')
      }
    },
    tag () {
      this.$nextTick(() => {
        if (!(this.getList instanceof Function)) {
          this.reInstantiateList()
        } else {
          console.warn('Prop \'tag\' is not reactive when your <m-list> is placed inside a menu or drawer. Changing \'tag\' won\'t take effect.')
        }
      })
    }
  },
  mounted () {
    this.updateSlot()
    this.slotObserver = new MutationObserver(() => this.updateSlot())
    this.slotObserver.observe(this.$el, {
      childList: true,
      subtree: true
    })
    if (!(this.getList instanceof Function)) { // can not be init by parent
      this.instantiate()
    }
  },
  beforeDestroy () {
    if (this.mdcList) this.mdcList.destroy()
  },
  methods: {
    instantiate () {
      this.mdcList = MDCList.attachTo(this.$el)
      this.propsSetting()
    },
    propsSetting () {
      this.mdcList.singleSelection = this.singleSelection
      if (this.singleSelection) this.$el.setAttribute('role', 'listbox')
      this.mdcList.vertical = this.vertical
      if ((this.selectedIndex instanceof Number && this.selectedIndex > -1) || this.selectedIndex instanceof Array) this.mdcList.selectedIndex = this.selectedIndex
      this.mdcList.wrapFocus = this.wrapFocus
    },
    /**
     * only called if there's no injected getList method
     */
    reInstantiateList () {
      if (this.mdcList instanceof MDCList) {
        this.mdcList.destroy()
      }
      this.mdcList = undefined
      if (this.js) { // prop js can be safely checked
        this.instantiate()
      }
    },
    updateSlot () {
      if (this.mdcList instanceof MDCList) this.mdcList.layout()
      if (this.singleSelection) {
        this.$slots.default.forEach((n) => {
          if (n.elm instanceof HTMLElement) {
            n.elm.setAttribute('role', 'option')
          }
        })
      }
    },
    onAction (e) {
      if (this.mdcList instanceof MDCList && this.mdcList.selectedIndex >= 0) {
        this.$emit('change', this.mdcList.selectedIndex)
      }
      this.$emit('action', e.detail)
    },
    onParentInit () {
      const list = this.getList()
      if (list instanceof MDCList) {
        if (this.mdcList instanceof MDCList) this.mdcList.destroy()
        this.mdcList = list
        this.propsSetting()
      }
    },
  }
}
</script>
