<template>
  <aside
    class="mdc-dialog"
    role="alertdialog"
    @MDCDialog:accept="onAccept"
    @MDCDialog:cancel="onCancel">
    <div class="mdc-dialog__surface">
      <header
        class="mdc-dialog__header"
        v-if="$slots['header']">
        <slot name="header" />
      </header>
      <section
        class="mdc-dialog__body"
        :class="bodyClasses"
        v-if="$slots['body']">
        <slot name="body" />
      </section>
      <footer
        class="mdc-dialog__footer"
        v-if="$slots['acceptButton'] || $slots['cancelButton'] || $slots['dialogButton']">
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

import themeClassMixin from '../base/themeClassMixin.js'

export default {
  mixins: [themeClassMixin],
  props: {
    scrollable: {
      type: Boolean,
      required: false
    }
  },
  data () {
    return {
      mdcDialog: null
    }
  },
  computed: {
    bodyClasses () {
      return {
        'mdc-dialog__body--scrollable': this.scrollable
      }
    }
  },
  mounted () {
    let vm = this
    vm.mdcDialog = MDCDialog.attachTo(this.$el)

    if (vm.$slots.acceptButton) {
      vm.$slots.acceptButton.map(n => {
        n.elm.classList.add('mdc-dialog__footer__button')
        n.elm.classList.add('mdc-dialog__footer__button--accept')
      })
    }
    if (vm.$slots.cancelButton) {
      vm.$slots.cancelButton.map(n => {
        n.elm.classList.add('mdc-dialog__footer__button')
        n.elm.classList.add('mdc-dialog__footer__button--cancel')
      })
    }
    if (vm.$slots.dialogButton) {
      vm.$slots.dialogButton.map(n => {
        n.elm.classList.add('mdc-dialog__footer__button')
      })
    }
  },
  beforeDestroy () {
    this.mdcDialog.destroy()
  },
  methods: {
    onAccept () {
      this.$emit('accepted')
    },
    onCancel () {
      this.$emit('canceled')
    },
    show () {
      this.mdcDialog.show()
    }
  }
}
</script>
