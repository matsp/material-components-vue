<template>
    <a
            :aria-selected="activated"
            :class="classes"
            :href="href"
            class="mdc-list-item"
            v-bind="$attrs"
            v-if="href"
            v-on="$listeners"
    >
    <slot
            name="graphic"
            v-if="$slots['graphic']"
    />
        <slot/>
        <span
                class="mdc-list-item__text"
                v-if="$slots['text'] || $slots['primaryText'] || $slots['secondaryText']"
        >
      <slot name="text"/>
      <span
              class="mdc-list-item__primary-text"
              v-if="$slots['primaryText']"
      >
        <slot name="primaryText"/>
      </span>
      <span
              class="mdc-list-item__secondary-text"
              v-if="$slots['secondaryText']"
      >
        <slot name="secondaryText"/>
      </span>
    </span>
    <slot
            name="meta"
            v-if="$slots['meta']"
    />
    </a>
    <li
            :class="classes"
            class="mdc-list-item"
            v-bind="$attrs"
            v-else
            v-on="$listeners"
    >
        <slot name="graphic"/>
        <slot/>
        <span
                class="mdc-list-item__text"
                v-if="$slots['text'] || $slots['primaryText'] || $slots['secondaryText']"
        >
      <slot name="text"/>
      <span
              class="mdc-list-item__primary-text"
              v-if="$slots['primaryText']"
      >
        <slot name="primaryText"/>
      </span>
      <span
              class="mdc-list-item__secondary-text"
              v-if="$slots['secondaryText']"
      >
        <slot name="secondaryText"/>
      </span>
    </span>
        <slot name="meta"/>
  </li>
</template>

<script>
  import { MDCRipple } from '@material/ripple'

  import { baseComponentMixin, themeClassMixin } from '../base'

  export default {
  mixins: [baseComponentMixin, themeClassMixin],
  props: {
    activated: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Boolean,
      default: false
    },
    href: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      mdcRipple: undefined,
      slotObserver: undefined
    }
  },
  computed: {
    classes () {
      return {
        'mdc-list-item--activated': this.activated,
        'mdc-list-item--selected': this.selected
      }
    }
  },
  watch: {
    classes () {
      this.mdcRipple.destroy()
      this.mdcRipple = MDCRipple.attachTo(this.$el)
    }
  },
  mounted () {
    this.updateSlots()
    this.slotObserver = new MutationObserver(() => this.updateSlots())
    this.slotObserver.observe(this.$el, {
      childList: true,
      subtree: true
    })
    this.mdcRipple = MDCRipple.attachTo(this.$el)
  },
  beforeDestroy () {
    this.slotObserver.disconnect()
    if (typeof this.mdcRipple !== 'undefined') {
      this.mdcRipple.destroy()
    }
  },
  methods: {
    updateSlots () {
      if (this.$slots.graphic) {
        this.$slots.graphic.map(n => {
          n.elm.classList.add('mdc-list-item__graphic')
          if (this.$el.getAttribute('role') === 'menuitem') {
            n.elm.classList.add('mdc-menu__selection-group-icon')
          }
        })
      }
      if (this.$slots.meta) {
        this.$slots.meta.map(n => {
          n.elm.classList.add('mdc-list-item__meta')
        })
      }
    }
  }
}
</script>
