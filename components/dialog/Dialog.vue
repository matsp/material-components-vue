<template>
  <div
    class="mdc-dialog"
    role="alertdialog"
    aria-modal="true"
    aria-labelledby="my-dialog-title"
    aria-describedby="my-dialog-content"
    @MDCDialog:closed="onClosed">
    <div class="mdc-dialog__container">
      <div class="mdc-dialog__surface">
        <!-- Title cannot contain leading whitespace due to mdc-typography-baseline-top() -->
        <header
          v-if="$slots['header']"
          class="mdc-dialog__title">
          <!-- --><slot name="header" /><!-- -->
        </header>
        <section
          v-if="$slots['body']"
          :class="bodyClasses"
          class="mdc-dialog__content">
          <slot name="body" />
        </section>
        <footer
          v-if="$slots['acceptButton'] || $slots['cancelButton'] || $slots['dialogButton']"
          class="mdc-dialog__actions">
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
    }
  },
  mounted () {
    this.mdcDialog = MDCDialog.attachTo(this.$el)
  },
  beforeDestroy () {
    this.mdcDialog.destroy()
  },
  methods: {
    onClosed (event) {
      this.model = false
      this.$emit('closed', event.detail)
    }
  }
}
</script>
