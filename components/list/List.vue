<template>
  <ul
    v-if="tag === 'ul'"
    :class="classes"
    class="mdc-list"
    v-bind="$attrs"
    @MDCList:action="onAction"
  >
    <slot />
  </ul>
  <nav
    v-else-if="tag === 'nav'"
    :class="classes"
    class="mdc-list"
    v-bind="$attrs"
    @MDCList:action="onAction"
  >
    <slot />
  </nav>
  <div
    v-else-if="tag === 'div'"
    :class="classes"
    class="mdc-list"
    v-bind="$attrs"
    @MDCList:action="onAction"
  >
    <slot />
  </div>
</template>

<script>
import { baseComponentMixin, themeClassMixin } from '../base'
import { MDCList } from '@material/list'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
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
      if (this.mdcList) { this.mdcList.singleSelection = this.singleSelection }
      if (this.singleSelection) {
        this.$el.setAttribute('role', 'listbox')
        this.$slots.default.forEach((n) => {
          if (n.elm) {
            n.elm.setAttribute('role', 'option')
          }
        })
      }
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
      this.reInstantiateList()
    },
    tag () {
      this.$nextTick(() => {
        this.reInstantiateList()
      })
    }
  },
  mounted () {
    this.$nextTick(() => {
      if (this.js && !this.mdcList) {
        this.mdcList = MDCList.attachTo(this.$el)
        this.mdcList.singleSelection = this.singleSelection
        if (this.singleSelection) this.$el.setAttribute('role', 'listbox')
        this.mdcList.vertical = this.vertical
        if ((this.selectedIndex instanceof Number && this.selectedIndex > -1) || this.selectedIndex instanceof Array) this.mdcList.selectedIndex = this.selectedIndex
        this.mdcList.wrapFocus = this.wrapFocus

        this.slotObserver = new MutationObserver(() => this.updateSlot())
        this.slotObserver.observe(this.$el, {
          childList: true,
          subtree: true
        })
      }
    })
  },
  beforeDestroy () {
    if (this.mdcList) this.mdcList.destroy()
  },
  methods: {
    reInstantiateList () {
      if (this.js) {
        if (this.mdcList) {
          this.mdcList.destroy()
        }
        MDCList.attachTo(this.$el)
        this.mdcList.singleSelection = this.singleSelection
        this.mdcList.vertical = this.vertical
        this.mdcList.selectedIndex = this.selectedIndex
        this.mdcList.wrapFocus = this.wrapFocus
      } else {
        if (this.mdcList) {
          this.mdcList.destroy()
        }
        this.mdcList = undefined
      }
    },
    updateSlot () {
      if (this.mdcList) this.mdcList.layout()
      if (this.singleSelection) {
        this.$slots.default.forEach((n) => {
          if (n.elm) {
            n.elm.setAttribute('role', 'option')
          }
        })
      }
    },
    onAction (e) {
      if (this.mdcList) {
        this.$emit('change', this.mdcList.selectedIndex)
      }
      this.$emit('action', e.detail)
    }
  }
}
</script>
