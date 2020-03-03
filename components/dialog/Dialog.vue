<template>
  <div
    :aria-describedby="ariaDescribedby"
    :aria-labelledby="ariaLabelledby"
    aria-modal="true"
    class="mdc-dialog"
    :class="classes"
    role="alertdialog"
    @MDCDialog:opening="onOpening"
    @MDCDialog:opened="onOpened"
    @MDCDialog:closing="onClosing"
    @MDCDialog:closed="onClosed"
  >
    <div class="mdc-dialog__container">
      <div class="mdc-dialog__surface">
        <h2
          v-if="$slots['header']"
          :id="ariaLabelledby"
          class="mdc-dialog__title"
        >
          <slot name="header" />
        </h2>
        <div
          v-if="$slots['body']"
          :id="ariaDescribedby"
          class="mdc-dialog__content"
        >
          <slot name="body" />
        </div>
        <slot />
        <footer
          v-if="$slots['acceptButton'] || $slots['cancelButton'] || $slots['dialogButton']"
          class="mdc-dialog__actions"
        >
          <slot name="cancelButton" />
          <slot name="acceptButton" />
          <slot name="dialogButton" />
        </footer>
      </div>
    </div>
    <div class="mdc-dialog__scrim" />
  </div>
</template>

<script>
import { MDCDialog } from '@material/dialog'

import { baseComponentMixin, themeClassMixin } from '@components/base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  model: {
    prop: 'open',
    event: 'change'
  },
  props: {
    scrollable: {
      type: Boolean,
      default: false
    },
    open: {
      type: Boolean,
      default: false
    },
    stacked: {
      type: Boolean,
      default: true
    },
    escapeKeyAction: {
      type: String,
      default: 'close'
    },
    scrimClickAction: {
      type: String,
      default: 'close'
    },
    ariaDescribedby: {
      type: String,
      default: 'my-dialog-content'
    },
    ariaLabelledby: {
      type: String,
      default: 'my-dialog-title'
    }
  },
  data () {
    return {
      mdcDialog: undefined,
      slotObserver: undefined
    }
  },
  computed: {
    classes () {
      return {
        'mdc-dialog--scrollable': this.scrollable
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
    open () {
      this.open ? this.mdcDialog.open() : this.mdcDialog.close()
    },
    stacked () {
      this.mdcDialog.autoStackButtons = this.stacked
    },
    escapeKeyAction () {
      this.mdcDialog.escapeKeyAction = this.escapeKeyAction
    },
    scrimClickAction () {
      this.mdcDialog.scrimClickAction = this.scrimClickAction
    }

  },
  mounted () {
    this.mdcDialog = MDCDialog.attachTo(this.$el)
    this.mdcDialog.autoStackButtons = this.stacked
    this.mdcDialog.escapeKeyAction = this.escapeKeyAction
    this.mdcDialog.scrimClickAction = this.scrimClickAction

    this.slotObserver = new MutationObserver(() => this.updateSlots())
    this.slotObserver.observe(this.$el, {
      childList: true,
      subtree: true
    })
    this.updateSlots()
  },
  beforeDestroy () {
    this.slotObserver.disconnect()
    this.mdcDialog.destroy()
  },
  methods: {
    onOpening () {
      this.$emit('opening')
    },
    onOpened () {
      this.$emit('opened')
      this.$el.setAttribute('aria-hidden', 'true')
    },
    onClosing (event) {
      this.$emit('closing', event.detail)
      this.$el.removeAttribute('aria-hidden')
    },
    onClosed (event) {
      this.model = false
      this.$emit('closed', event.detail)
    },
    updateSlots () {
      if (this.$slots.cancelButton) {
        this.$slots.cancelButton.map(n => {
          if (n.elm.tagName.toUpperCase() !== 'BUTTON' && !n.elm.classList.contains('mdc-dialog__button')) { n.elm.classList.add('mdc-dialog__button') }
          if (!n.elm.hasAttribute('data-mdc-dialog-action')) {
            n.elm.setAttribute('data-mdc-dialog-action', 'close')
          }
        })
      }
      if (this.$slots.acceptButton) {
        this.$slots.acceptButton.map(n => {
          if (n.elm.tagName.toUpperCase() !== 'BUTTON') {
            if (!n.elm.classList.contains('mdc-dialog__button')) {
              n.elm.classList.add('mdc-dialog__button')
            }
            if (!n.elm.classList.contains('mdc-dialog__button--default')) {
              n.elm.classList.add('mdc-dialog__button--default')
            }
          }
          if (!n.elm.hasAttribute('data-mdc-dialog-action')) {
            n.elm.setAttribute('data-mdc-dialog-action', 'accept')
          }
        })
      }
      this.mdcDialog.layout()
    }
  }
}
</script>
