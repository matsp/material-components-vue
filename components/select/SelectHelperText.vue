<template>
    <p
            :class="classes"
            aria-hidden="true"
            class="mdc-select-helper-text"
            v-bind="$attrs"
    >
        <slot/>
    </p>
</template>

<script>
  import { baseComponentMixin, themeClassMixin } from '../base'
  import { MDCSelectHelperText } from '@material/select/helper-text'

  export default {
    name: 'SelectHelperText',
    mixins: [baseComponentMixin, themeClassMixin],
    props: {
      persistent: {
        type: Boolean,
        default: false
      },
      validationMsg: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        mdcSelectHelperText: undefined
      }
    },
    computed: {
      classes () {
        return {
          'mdc-select-helper-text--persistent': this.persistent,
          'mdc-select-helper-text--validation-msg': this.validationMsg
        }
      }
    },
    mounted () {
      this.mdcSelectHelperText = MDCSelectHelperText.attachTo(this.$el)
    },
    beforeDestroy () {
      if (typeof this.mdcSelectHelperText !== 'undefined') {
        this.mdcSelectHelperText.destroy()
      }
    }
  }
</script>

<style scoped>

</style>
