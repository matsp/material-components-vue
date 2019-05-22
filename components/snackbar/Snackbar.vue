<template>
  <div
    :class="classes"
    class="mdc-snackbar"
    @MDCSnackbar:closed="onClosed"
    @MDCSnackbar:closing="onClosing"
    @MDCSnackbar:opened="onOpened"
    @MDCSnackbar:opening="onOpening"
  >
    <div class="mdc-snackbar__surface">
      <div
        aria-live="polite"
        class="mdc-snackbar__label"
        role="status"
      >
        <slot />
      </div>
      <div
        v-if="hasDismiss || actionButtonText !== ''"
        class="mdc-snackbar__actions"
      >
        <button
          v-if="actionButtonText !== ''"
          class="mdc-button mdc-snackbar__action"
          type="button"
        />
        <button
          v-if="hasDismiss"
          class="mdc-icon-button mdc-snackbar__dismiss material-icons"
          title="Dismiss"
        >
          close
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { MDCSnackbar } from '@material/snackbar'

import { baseComponentMixin, themeClassMixin } from '../base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  model: {
    prop: 'open',
    event: 'change'
  },
  props: {
    timeoutMs: {
      type: Number,
      default: 5000
    },
    closeOnEscape: {
      type: Boolean,
      default: true
    },
    open: {
      type: Boolean,
      default: false
    },
    labelText: {
      type: String,
      default: ''
    },
    actionButtonText: {
      type: String,
      default: ''
    },
    leading: {
      type: Boolean,
      default: false
    },
    stacked: {
      type: Boolean,
      default: false
    },
    hasDismiss: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      mdcSnackbar: undefined
    }
  },
  computed: {
    classes () {
      return {
        'mdc-snackbar--leading': this.leading,
        'mdc-snackbar--stacked': this.stacked
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
      if (this.open) this.mdcSnackbar.open()
    },
    'mdcSnackbar.isOpen': function () {
      this.model = this.mdcSnackbar.isOpen
    },
    actionButtonText () {
      if (this.actionButtonText && this.actionButtonText !== '') this.mdcSnackbar.actionButtonText = this.actionButtonText
    },
    labelText () {
      if (this.labelText && this.labelText !== '') this.mdcSnackbar.labelText = this.labelText
    },
    closeOnEscape () {
      this.mdcSnackbar.closeOnEscape = this.closeOnEscape
    },
    timeoutMs () {
      this.mdcSnackbar.timeoutMs = this.timeoutMs
    }
  },
  mounted () {
    this.mdcSnackbar = MDCSnackbar.attachTo(this.$el)
    this.mdcSnackbar.timeoutMs = this.timeoutMs
    this.mdcSnackbar.closeOnEscape = this.closeOnEscape
    if (this.labelText && this.labelText !== '') this.mdcSnackbar.labelText = this.labelText
    if (this.actionButtonText && this.actionButtonText !== '') this.mdcSnackbar.actionButtonText = this.actionButtonText
  },
  beforeDestroy () {
    this.mdcSnackbar.destroy()
  },
  methods: {
    onClosing (e) {
      this.$emit('closing', e.detail)
    },
    onClosed (e) {
      this.$emit('closed', e.detail)
    },
    onOpening () {
      this.$emit('opening')
    },
    onOpened () {
      this.$emit('opened')
    }
  }
}
</script>
