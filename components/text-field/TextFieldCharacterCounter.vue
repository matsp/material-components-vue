<template>
  <div class="mdc-text-field-character-counter">
    {{ currentLength }} / {{ maxLength }}
  </div>
</template>

<script>
import { MDCTextFieldCharacterCounter } from '@material/textfield/character-counter'

import { baseComponentMixin, themeClassMixin } from '../base'

export default {
  name: 'TextFieldCharacterCounter',
  mixins: [baseComponentMixin, themeClassMixin],
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
    currentLength () {
      this.cl = this.currentLength
      this.mdcTextFieldCharacterCounter.foundation.setCounterValue(this.currentLength, this.maxLength)
    },
    maxLength () {
      this.ml = this.maxLength
      this.mdcTextFieldCharacterCounter.foundation.setCounterValue(this.currentLength, this.maxLength)
    }
  },
  mounted () {
    let input = this.$el.parentElement.previousElementSibling.querySelector('.mdc-text-field__input')
    if (input) {
      this.ml = input.getAttribute('maxlength')
      this.cl = input.value.length
    }
    this.mdcTextFieldCharacterCounter = MDCTextFieldCharacterCounter.attachTo(this.$el)
    this.mdcTextFieldCharacterCounter.foundation.setCounterValue(this.cl, this.ml)
  }
}
</script>

<style scoped>

</style>
