<template>
  <div
    :class="classes"
    class="mdc-card"
  >
    <div
      v-if="primaryAction"
      class="mdc-card__primary-action"
      tabindex="0"
      v-on="$listeners"
    >
      <slot />
    </div>
    <slot v-else />
    <div
      v-if="$slots['actionButtons'] || $slots['actionIcons'] || $slots['fullBleedButton'] || $slots['actions']"
      :class="actionClasses"
      class="mdc-card__actions"
    >
      <slot
        v-if="fullBleedAction && $slots['fullBleedButton']"
        name="fullBleedButton"
      />
      <slot
        name="actions"
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
import { baseComponentMixin, themeClassMixin } from '@components/base'

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
    },
    primaryAction: {
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
      if (this.$slots.actions) {
        this.$slots.actions.forEach((n) => {
          if (n.elm && n.elm.classList) {
            n.elm.classList.add('mdc-card__action')
            n.elm.classList.contains('mdc-icon-button') ? n.elm.classList.add('mdc-card__action--icon') : n.elm.classList.add('mdc-card__action--button')
          }
        })
      }
    }
  }
}
</script>
