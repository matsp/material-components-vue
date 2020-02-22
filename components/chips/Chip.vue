<template>
  <button
    class="mdc-chip"
    v-bind="$attrs"
    @MDCChip:interaction="onInteraction"
    @MDCChip:removal="onRemoval"
    @MDCChip:trailingIconInteraction="onTrailingIconInteraction"
    @MDCChip:selection="onSelection"
    @_init="onParentInit"
  >
    <slot
      name="leadingIcon"
    />
    <div
      v-if="filter"
      class="mdc-chip__checkmark"
    >
      <svg
        class="mdc-chip__checkmark-svg"
        viewBox="-2 -3 30 30"
      >
        <path
          class="mdc-chip__checkmark-path"
          fill="none"
          stroke="black"
          d="M1.73,12.91 8.1,19.28 22.79,4.59"
        />
      </svg>
    </div>
    <div class="mdc-chip__text">
      <slot />
    </div>
    <slot
      name="trailingIcon"
    />
  </button>
</template>

<script>
import { baseComponentMixin, themeClassMixin } from '../base'
import { MDCChip } from '@material/chips/index'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  model: {
    prop: 'selected',
    event: 'change'
  },
  props: {
    selected: {
      type: Boolean,
      default: false
    },
    shouldRemoveOnTrailingIconClick: {
      type: Boolean,
      default: true
    },
    exit: {
      type: Boolean,
      default: false
    }
  },
  inject: {
    getChipInstance: {
      default: null
    },
    getFilter: {
      default: () => false
    }
  },
  data () {
    return {
      slotObserver: undefined,
      mdcChip: undefined,
      filter: this.getFilter()
    }
  },
  watch: {
    exit (val) {
      if (val && this.mdcChip instanceof MDCChip) {
        this.mdcChip.beginExit()
      }
    },
    selected (val) {
      if (this.mdcChip instanceof MDCChip) {
        this.mdcChip.selected = val
      }
    },
    shouldRemoveOnTrailingIconClick (val) {
      if (this.mdcChip instanceof MDCChip) {
        this.mdcChip.shouldRemoveOnTrailingIconClick = val
      }
    }
  },
  mounted () {
    this.updateSlots()
    this.slotObserver = new MutationObserver(() => this.updateSlots()) // use for automatically call addChip
    this.slotObserver.observe(this.$el, {
      childList: true,
      subtree: true
    })
    if (!(this.getChipInstance instanceof Function)) { // can not be init by parent
      this.mdcChip = MDCChip.attachTo(this.$el)
      this.mdcChip.selected = this.selected
      this.mdcChip.shouldRemoveOnTrailingIconClick = this.shouldRemoveOnTrailingIconClick
    }
  },
  beforeDestroy () {
    this.slotObserver.disconnect()
  },
  methods: {
    updateSlots () {
      if (this.$slots.leadingIcon) {
        this.$slots.leadingIcon.forEach(n => {
          if (n.elm instanceof HTMLElement) {
            n.elm.classList.add('mdc-chip__icon')
            if (this.selected) {
              n.elm.classList.add('mdc-chip__icon--leading-hidden')
            } else {
              n.elm.classList.remove('mdc-chip__icon--leading-hidden')
              n.elm.classList.add('mdc-chip__icon--leading')
            }
          }
        })
      }
      if (this.$slots.trailingIcon) {
        this.$slots.trailingIcon.forEach(n => {
          if (n.elm instanceof HTMLElement) {
            n.elm.classList.add('mdc-chip__icon')
            n.elm.classList.add('mdc-chip__icon--trailing')
            n.elm.setAttribute('role', 'button')
            n.elm.setAttribute('tabindex', '0')
          }
        })
      }
    },
    onTrailingIconInteraction (e) {
      this.$emit('trailingIconInteraction', e.detail)
    },
    onRemoval (e) {
      this.$emit('removal', e.detail)
    },
    onSelection (e) {
      this.$emit('selection', e.detail)
      this.$emit('change', e.detail.selected)
    },
    onInteraction (e) {
      this.$emit('interaction', e.detail)
    },
    onParentInit () {
      this.filter = this.getFilter()
      const chipInstance = this.getChipInstance(this.$el.id)
      if (chipInstance instanceof MDCChip) {
        if (this.mdcChip instanceof MDCChip) this.mdcChip.destroy()
        this.mdcChip = chipInstance
        this.mdcChip.selected = this.selected
        this.mdcChip.shouldRemoveOnTrailingIconClick = this.shouldRemoveOnTrailingIconClick
      }
    }
  }
}
</script>
