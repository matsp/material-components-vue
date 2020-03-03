<template>
  <button
    v-if="href.length === 0"
    :class="classes"
    class="mdc-tab"
    :tabindex="active ? 0 : -1"
    :aria-selected="active"
    role="tab"
    @MDCTab:interacted="onInteracted"
  >
    <span class="mdc-tab__content">
      <slot name="icon" />
      <span class="mdc-tab__text-label">
        <slot />
      </span>
      <span
        v-if="spanningOnlyContent && !hasIndicator"
        :class="indicatorClasses"
        class="mdc-tab-indicator"
      >
        <span
          class="mdc-tab-indicator__content"
          :class="indicatorContentClasses"
        >{{ indicatorIcon }}</span>
      </span>
      <slot
        v-if="spanningOnlyContent"
        name="indicator"
      />
    </span>
    <span
      v-if="!spanningOnlyContent && !hasIndicator"
      :class="indicatorClasses"
      class="mdc-tab-indicator"
    >
      <span
        class="mdc-tab-indicator__content"
        :class="indicatorContentClasses"
      >{{ indicatorIcon }}</span>
    </span>
    <slot
      v-if="!spanningOnlyContent"
      name="indicator"
    />
    <span class="mdc-tab__ripple" />
  </button>
  <a
    v-else
    :href="href"
    :class="classes"
    class="mdc-tab"
    tabindex="-1"
    aria-selected="false"
    role="tab"
    @MDCTab:interacted="onInteracted"
  >
    <span class="mdc-tab__content">
      <slot name="icon" />
      <span class="mdc-tab__text-label">
        <slot />
      </span>
      <span
        v-if="spanningOnlyContent && !hasIndicator"
        :class="indicatorClasses"
        class="mdc-tab-indicator"
      >
        <span
          class="mdc-tab-indicator__content"
          :class="indicatorContentClasses"
        >{{ indicatorIcon }}</span>
      </span>
      <slot
        v-if="spanningOnlyContent"
        name="indicator"
      />
    </span>
    <span
      v-if="!spanningOnlyContent && !hasIndicator"
      :class="indicatorClasses"
      class="mdc-tab-indicator"
    >
      <span
        class="mdc-tab-indicator__content"
        :class="indicatorContentClasses"
      >{{ indicatorIcon }}</span>
    </span>
    <slot
      v-if="!spanningOnlyContent"
      name="indicator"
    />
    <span class="mdc-tab__ripple" />
  </a>
</template>

<script>
import { MDCTab } from '@material/tab'

import { baseComponentMixin, themeClassMixin } from '@components/base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  provide () {
    return {
      getIndicator: this.getIndicator
    }
  },
  inject: ['getTabInstance', 'replaceTabInstance'],
  model: {
    prop: 'active',
    event: 'change'
  },
  props: {
    active: {
      type: Boolean,
      default: false
    },
    spanningOnlyContent: {
      type: Boolean,
      default: false
    },
    focusOnActivate: {
      type: Boolean,
      default: true
    },
    stacked: {
      type: Boolean,
      default: false
    },
    minWidth: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      default: ''
    },
    fade: {
      type: Boolean,
      default: false
    },
    indicatorIcon: {
      type: String,
      default: ''
    },
    indicatorIconClass: {
      type: String,
      default: 'material-icons'
    },
    href: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      mdcTab: undefined,
      slotObserver: undefined,
      classObserver: undefined,
      hasIndicator: Boolean(this.$slots.indicator),
      index: -1
    }
  },
  computed: {
    classes () {
      return {
        'mdc-tab--active': this.active,
        'mdc-tab--stacked': this.stacked,
        'mdc-tab--min-width': this.minWidth
      }
    },
    indicatorClasses () {
      return {
        'mdc-tab-indicator--active': this.active,
        'mdc-tab-indicator--fade': this.fade
      }
    },
    indicatorContentClasses () {
      const isUnderline =
          this.indicatorIcon === '' &&
          this.indicatorIconClass === 'material-icons'
      const result = {
        'mdc-tab-indicator__content--underline': isUnderline,
        'mdc-tab-indicator__content--icon': !isUnderline
      }
      if (isUnderline) return result
      this.indicatorIconClass
        .split(' ')
        .filter(c => c.length > 0)
        .forEach(c => {
          result[c] = true
        })
      return result
    },
    model: {
      get () {
        return this.active
      },
      set (value) {
        this.$emit('change', value)
      }
    }
  },
  watch: {
    focusOnActivate (val) {
      this.mdcTab.focusOnActivate = val
    },
    id (val) {
      if (val.length > 0) this.mdcTab.id = val
    },
    active (val) {
      if (val) {
        this.mdcTab.activate()
      } else {
        this.mdcTab.deactivate()
      }
    },
    hasIndicator () {
      this.reInstantiate()
    },
    spanningOnlyContent () {
      this.reInstantiate()
    }
  },
  mounted () {
    this.updateSlot()
    this.slotObserver = new MutationObserver(() => this.updateSlot())
    this.slotObserver.observe(this.$el, {
      childList: true,
      subtree: true
    })

    this.classObserver = new MutationObserver(() => this.updateActive())
    this.classObserver.observe(this.$el, {
      attributes: true
    })
    if (this.getTabInstance instanceof Function) { // within <m-tab-bar>
      this.$nextTick(() => {
        [this.mdcTab, this.index] = this.getTabInstance(this.$el)
        this.assignProperties()
        this.updateSlot()
      })
    } else { // standalone tab
      this.mdcTab = MDCTab.attachTo(this.$el)
    }
  },
  beforeDestroy () {
    this.slotObserver.disconnect()
    this.classObserver.disconnect()
    if (this.mdcTab instanceof MDCTab) {
      this.mdcTab.destroy()
    }
  },
  methods: {
    updateSlot () {
      if (this.$slots.icon) {
        this.$slots.icon.map(n => {
          if (n.elm instanceof Element) n.elm.classList.add('mdc-tab__icon')
        })
      }
      this.hasIndicator = Boolean(this.$slots.indicator)
    },
    /**
       * use for v-model
       */
    updateActive () {
      if (this.$el.classList.contains('mdc-tab--active') && !this.active) {
        this.model = true
      } else if (
        this.active &&
          !this.$el.classList.contains('mdc-tab--active')
      ) {
        this.model = false
      }
    },
    onInteracted (e) {
      this.$emit('interacted', e.detail)
    },
    reInstantiate () {
      if (this.mdcTab instanceof MDCTab) this.mdcTab.destroy()
      this.$nextTick(() => {
        this.updateSlot()
        this.mdcTab = MDCTab.attachTo(this.$el)
        if (this.index !== -1) { // within <m-tab-bar>
          this.replaceTabInstance(this.mdcTab, this.index)
        }
      })
    },
    assignProperties () {
      if (this.id.length > 0) this.mdcTab.id = this.id
      this.mdcTab.focusOnActivate = this.focusOnActivate
    },
    getIndicator () {
      return this.mdcTab.tabIndicator_
    }
  }
}
</script>
