<template>
  <div
    class="mdc-card"
    :class="classes">
    <div :class="contentClasses">
      <slot name="media"/>
      <slot />
    </div>
    <div
      class="mdc-card__actions"
      :class="actionClasses"
      v-if="$slots['actionButtons'] || $slots['actionIcons']">
      <div
        class="mdc-card__action-buttons"
        v-if="$slots['actionButtons']">
        <slot name="actionButtons"/>
      </div>
      <div
        class="mdc-card__action-icons"
        v-if="$slots['actionIcons']">
        <slot name="actionIcons"/>
      </div>
    </div>
  </div>
</template>

<script>
import themeClassMixin from '../base/themeClassMixin.js'

export default {
  mixins: [themeClassMixin],
  props: {
    stroked: {
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
  computed: {
    classes () {
      return {
        'mdc-card--stroked': this.stroked
      }
    },
    contentClasses () {
      return {
        'mdc-card__primary-action': this.primaryAction
      }
    },
    actionClasses () {
      return {
        'mdc-card__actions--full-bleed': this.fullBleedAction
      }
    }
  },
  mounted () {
    if (this.$slots.actionButtons) {
      this.$slots.actionButtons.map((n) => {
        n.elm.classList.add('mdc-card__action')
        n.elm.classList.add('mdc-card__action--button')
      })
    }

    if (this.$slots.actionIcons) {
      this.$slots.actionIcons.map((n) => {
        n.elm.classList.add('mdc-card__action')
        n.elm.classList.add('mdc-card__action--icon')
        n.elm.setAttribute('tabindex', '0')
        n.elm.setAttribute('role', 'button')
      })
    }
  }
}
</script>
