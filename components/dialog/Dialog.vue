<template>
  <aside
    class="mdc-dialog"
    role="alertdialog"
    @MDCDialog:accept="onAccept"
    @MDCDialog:cancel="onCancel">
    <div class="mdc-dialog__surface">
      <header
        v-if="$slots['header']"
        class="mdc-dialog__header">
        <slot name="header" />
      </header>
      <section
        v-if="$slots['body']"
        :class="bodyClasses"
        class="mdc-dialog__body">
        <slot name="body" />
      </section>
      <footer
        v-if="$slots['acceptButton'] || $slots['cancelButton'] || $slots['dialogButton']"
        class="mdc-dialog__footer">
        <slot name="acceptButton" />
        <slot name="cancelButton" />
        <slot name="dialogButton" />
      </footer>
    </div>
    <div class="mdc-dialog__backdrop"/>
  </aside>
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
      if (this.open) this.mdcDialog.show()
    }
  },
  mounted () {
    this.updateSlots()
    this.slotObserver = new MutationObserver(() => this.updateSlots())
    this.slotObserver.observe(this.$el, {
      childList: true,
      subtree: true
    })

    this.mdcDialog = MDCDialog.attachTo(this.$el)
  },
  beforeDestroy () {
    this.slotObserver.disconnect()
    this.mdcDialog.destroy()
  },
  methods: {
    updateSlots () {
      if (this.$slots.acceptButton) {
        this.$slots.acceptButton.map(n => {
          n.elm.classList.add('mdc-dialog__footer__button')
          n.elm.classList.add('mdc-dialog__footer__button--accept')
        })
      }
      if (this.$slots.cancelButton) {
        this.$slots.cancelButton.map(n => {
          n.elm.classList.add('mdc-dialog__footer__button')
          n.elm.classList.add('mdc-dialog__footer__button--cancel')
        })
      }
      if (this.$slots.dialogButton) {
        this.$slots.dialogButton.map(n => {
          n.elm.classList.add('mdc-dialog__footer__button')
        })
      }
    },
    onAccept () {
      this.model = false
      this.$emit('accept')
    },
    onCancel () {
      this.model = false
      this.$emit('cancel')
    }
  }
}
</script>
