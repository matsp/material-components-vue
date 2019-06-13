<template>
  <div
    :class="classes"
    class="mdc-card"
  >
    <slot />
    <div
      v-if="$slots['actionButtons'] || $slots['actionIcons'] || $slots['fullBleedButton']"
      :class="actionClasses"
      class="mdc-card__actions"
    >
      <slot
        v-if="fullBleedAction"
        name="fullBleedButton"
      />
      <div
        v-if="!fullBleedAction && $slots['actionButtons']"
        class="mdc-card__action-buttons"
      >
        <slot name="actionButtons" />
      </div>
      <div
        v-if="!fullBleedAction && $slots['actionIcons']"
        class="mdc-card__action-icons"
      >
        <slot name="actionIcons" />
      </div>
    </div>
  </div>
</template>

<script>
import { baseComponentMixin, themeClassMixin } from '../base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  props: {
    outlined: {
      type: Boolean,
      default: false
    },
    fullBleedAction: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      slotObserver: undefined
    }
  },
  computed: {
    classes () {
      return {
        'mdc-card--outlined': this.outlined
      }
    },
    actionClasses () {
      return {
        'mdc-card__actions--full-bleed': this.fullBleedAction
      }
    },
    primaryAction () {
      return this.$slots.actionableContent != null
    }
  },
  mounted () {
    this.updateSlots()
    this.slotObserver = new MutationObserver(() => this.updateSlots())
    this.slotObserver.observe(this.$el, {
      childList: true,
      subtree: true
    })
  },
  beforeDestroy () {
    this.slotObserver.disconnect()
  },
  methods: {
    updateSlots () {
      if (this.$slots.fullBleedButton) {
        this.$slots.fullBleedButton.map((n) => {
          if (n.elm && n.elm.classList) {
            n.elm.classList.add('mdc-card__action')
            n.elm.classList.add('mdc-card__action--button')
          }
        })
      }
      if (this.$slots.actionButtons) {
        this.$slots.actionButtons.forEach((n) => {
          if (n.elm && n.elm.classList) {
            n.elm.classList.add('mdc-card__action')
            n.elm.classList.add('mdc-card__action--button')
          }
        })
      }
      if (this.$slots.actionIcons) {
        this.$slots.actionIcons.forEach((n) => {
          if (n.elm && n.elm.classList) {
            n.elm.classList.add('mdc-card__action')
            n.elm.classList.add('mdc-card__action--icon')
          }
        })
      }
    }
  }
}
</script>
