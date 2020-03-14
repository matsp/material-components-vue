<template>
  <div
    :aria-describedby="ariaDescribedby"
    :aria-labelledby="ariaLabelledby"
    aria-modal="true"
    class="mdc-dialog"
    :class="classes"
    role="alertdialog"
    v-bind="$attrs"
    @MDCDialog:opening="onOpening"
    @MDCDialog:opened="onOpened"
    @MDCDialog:closing="onClosing"
    @MDCDialog:closed="onClosed"
  >
    <div class="mdc-dialog__container">
      <div class="mdc-dialog__surface">
        <h2
          v-if="hasHeader"
          :id="ariaLabelledby"
          class="mdc-dialog__title"
        >
          <slot name="header" />
        </h2>
        <div
          v-if="hasBody"
          :id="ariaDescribedby"
          class="mdc-dialog__content"
        >
          <slot name="body" />
        </div>
        <slot />
        <footer
          v-if="hasActions"
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
import { MDCComponent } from '@material/base/component'

import { baseComponentMixin, themeClassMixin } from '../base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  provide () {
    return { getRipple: this.getRipple }
  },
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
    stacked: { // todo: rename to autoStackButtons to make it consistent with mdc-web
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
      default: function () {
        return this.$attrs.id ? `${this.$attrs.id}-content` : 'my-dialog-content'
      } // todo: better id?
    },
    ariaLabelledby: {
      type: String,
      default: function () {
        return this.$attrs.id ? `${this.$attrs.id}-title` : 'my-dialog-title'
      } // todo: better id?
    }
  },
  data () {
    return {
      mdcDialog: undefined,
      slotObserver: undefined,
      hasHeader: this.$slots.header != null,
      hasBody: this.$slots.body != null,
      hasActions: this.$slots.cancelButton != null || this.$slots.dialogButton != null || this.$slots.acceptButton != null
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
    open (value) {
      if (this.mdcDialog instanceof MDCDialog) {
        value ? this.mdcDialog.open() : this.mdcDialog.close()
      } else {
        // can only be turning from `false` to `true` so just instantiate it
        this.instantiate()
      }
    },
    stacked (value) {
      this.mdcDialog.autoStackButtons = value
    },
    escapeKeyAction (value) {
      this.mdcDialog.escapeKeyAction = value
    },
    scrimClickAction (value) {
      this.mdcDialog.scrimClickAction = value
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
        this.$slots.cancelButton.forEach(n => {
          if (n.elm instanceof Element) {
            if (n.elm.tagName.toUpperCase() !== 'BUTTON' && !n.elm.classList.contains('mdc-dialog__button')) { n.elm.classList.add('mdc-dialog__button') }
            if (!n.elm.hasAttribute('data-mdc-dialog-action')) {
              n.elm.setAttribute('data-mdc-dialog-action', 'close')
            }
          }
        })
      }
      if (this.$slots.dialogButton) {
        this.$slots.dialogButton.forEach(n => {
          if (n.elm instanceof Element) {
            if (n.elm.tagName.toUpperCase() !== 'BUTTON' && !n.elm.classList.contains('mdc-dialog__button')) { n.elm.classList.add('mdc-dialog__button') }
            // todo: add some warning if it doesn't have data-mdc-dialog-action
          }
        })
      }
      if (this.$slots.acceptButton) {
        this.$slots.acceptButton.forEach(n => {
          if (n.elm instanceof Element) {
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
          }
        })
      }
      this.hasHeader = this.$slots.header != null
      this.hasBody = this.$slots.body != null
      this.hasActions = this.$slots.cancelButton != null || this.$slots.dialogButton != null || this.$slots.acceptButton != null
      this.$nextTick(() => { // wait for the DOM change
        this.reInstantiate()
      })
    },
    reInstantiate () {
      if (this.mdcDialog instanceof MDCDialog) {
        this.mdcDialog.destroy()
      }
      this.open ? this.instantiate() : this.mdcDialog = undefined
    },
    instantiate () {
      this.mdcDialog = MDCDialog.attachTo(this.$el)
      this.mdcDialog.autoStackButtons = this.stacked
      this.mdcDialog.escapeKeyAction = this.escapeKeyAction
      this.mdcDialog.scrimClickAction = this.scrimClickAction
      this.open ? this.mdcDialog.open() : this.mdcDialog.close()
      this.$nextTick(() => {
        if (this.mdcDialog.buttonRipples_ instanceof Array) {
          this.mdcDialog.buttonRipples_.filter(ripple => ripple instanceof MDCComponent).forEach(ripple => {
            ripple.emit('_init')
          })
        }
      })
    },
    getRipple (el) {
      if (this.mdcDialog instanceof MDCDialog && this.mdcDialog.buttonRipples_ instanceof Array) {
        for (const ripple of this.mdcDialog.buttonRipples_) {
          if (ripple instanceof MDCComponent && ripple.root_ === el) return ripple
        }
      }
    }
  }
}
</script>
