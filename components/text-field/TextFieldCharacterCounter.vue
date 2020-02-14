<template>
  <div
    class="mdc-text-field-character-counter"
    @_init="onParentInit"
  >
    {{ currentLength }} / {{ maxLength }}
  </div>
</template>

<script>
import { MDCTextFieldCharacterCounter } from '@material/textfield/character-counter'

import { baseComponentMixin, themeClassMixin } from '../base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  inject: {
    getCharacterCounter: {
      default: null
    }
  },
  props: {
    currentLength: {
      type: Number,
      default: 0
    },
    maxLength: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      mdcTextFieldCharacterCounter: undefined,
      cl: this.currentLength,
      ml: this.maxLength
    }
  },
  watch: {
    currentLength (val) {
      this.cl = val
      this.mdcTextFieldCharacterCounter.foundation.setCounterValue(this.currentLength, this.maxLength)
    },
    maxLength (val) {
      this.ml = val
      this.mdcTextFieldCharacterCounter.foundation.setCounterValue(this.currentLength, this.maxLength)
    }
  },
  mounted () {
    const input = this.$el.parentElement.previousElementSibling.querySelector('.mdc-text-field__input')
    if (input instanceof HTMLInputElement) {
      if (this.currentLength === 0) this.cl = input.value.length
      if (this.maxLength === 0) this.ml = input.getAttribute('maxlength')
    }
    if (!(this.getCharacterCounter instanceof Function)) { // can not be init by parent
      this.mdcTextFieldCharacterCounter = MDCTextFieldCharacterCounter.attachTo(this.$el)
      this.mdcTextFieldCharacterCounter.foundation.setCounterValue(this.cl, this.ml)
    }
  },
  methods: {
    onParentInit (characterCounter) {
      if (characterCounter instanceof MDCTextFieldCharacterCounter) {
        if (this.mdcTextFieldCharacterCounter instanceof MDCTextFieldCharacterCounter) this.mdcTextFieldCharacterCounter.destroy()
        this.mdcTextFieldCharacterCounter = characterCounter
        this.mdcTextFieldCharacterCounter.foundation.setCounterValue(this.cl, this.ml)
      }
    }
  }
}
</script>

<style scoped>

</style>
