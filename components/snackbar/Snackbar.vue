<template>
  <div
    class="mdc-snackbar"
    :class="classes"
    aria-live="assertive"
    aria-atomic="true"
    aria-hidden="true"
    @MDCSnackbar:hide="model = false">
    <div class="mdc-snackbar__text" />
    <div class="mdc-snackbar__action-wrapper">
      <button
        type="button"
        class="mdc-snackbar__action-button"/>
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
    alignStart: {
      type: Boolean,
      default: false
    },
    dismissesOnAction: {
      type: Boolean,
      default: true
    },
    open: {
      type: Boolean,
      default: false
    },
    options: {
      type: Object,
      required: true
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
        'mdc-snackbar--align-start': this.alignStart
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
    dismissesOnAction () {
      this.mdcSnackbar.dismissesOnAction = this.dismissesOnAction
    },
    open () {
      if (this.open) this.mdcSnackbar.show(this.options)
    }
  },
  mounted () {
    this.mdcSnackbar = MDCSnackbar.attachTo(this.$el)
  },
  beforeDestroy () {
    this.mdcSnackbar.destroy()
  }
}
</script>
