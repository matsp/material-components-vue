<template>
  <div
          @MDCDialog:closed="onClosed"
          aria-describedby="my-dialog-content"
          aria-labelledby="my-dialog-title"
          aria-modal="true"
          class="mdc-dialog"
          role="alertdialog"
  >
    <div class="mdc-dialog__container">
      <div class="mdc-dialog__surface">
          <h2
                  class="mdc-dialog__title"
                  id="my-dialog-title"
                  v-if="$slots['header']"
          >
              <!-- -->
              <slot name="header"/><!-- -->
          </h2>
          <div
                  :class="bodyClasses"
                  class="mdc-dialog__content"
                  id="my-dialog-content"
                  v-if="$slots['body']"
          >
          <slot name="body" />
          </div>
        <footer
                class="mdc-dialog__actions"
                v-if="$slots['acceptButton'] || $slots['cancelButton'] || $slots['dialogButton']"
        >
          <slot name="cancelButton" />
          <slot name="acceptButton" />
          <slot name="dialogButton" />
        </footer>
      </div>
    </div>
      <div class="mdc-dialog__scrim"/>
  </div>
</template>

<script>
  import { MDCDialog } from '@material/dialog'

  import { baseComponentMixin, themeClassMixin } from '../base'

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
    }
  },
  data () {
    return {
      mdcDialog: undefined,
      slotObserver: undefined
    }
  },
  computed: {
    bodyClasses () {
      return {
        'mdc-dialog__body--scrollable': this.scrollable
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
      if (this.open) this.mdcDialog.open()
    },
    stacked () {
      if (!this.stacked) this.mdcDialog.autoStackButtons = false
    }
  },
  mounted () {
    this.mdcDialog = MDCDialog.attachTo(this.$el)
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
    }
  }
}
</script>
