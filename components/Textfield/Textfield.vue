<template>
    <div class="mdc-textfield" :class="classes">
        <i v-if="leadingIcon" class="material-icons mdc-textfield__icon">{{leadingIcon}}</i>
        <input class="mdc-textfield__input" :value="value" @input="onInput" v-bind="$attrs" />
        <label class="mdc-textfield__label" :class="classesLabel" v-if="$slots['default'] && !fullWidth">
          <slot />
        </label>
        <i v-if="trailingIcon" class="material-icons mdc-textfield__icon">{{trailingIcon}}</i>
        <div v-if="bottomLine" class="mdc-textfield__bottom-line"></div>
    </div>
</template>

<script>
import { MDCTextfield } from '@material/textfield'
import { debounce } from '../utils'

export default {
  props: {
    value: {
      type: String,
      required: false
    },
    disabled: {
      type: Boolean,
      required: false
    },
    upgraded: {
      type: Boolean,
      required: false
    },
    fullWidth: {
      type: Boolean,
      required: false
    },
    box: {
      type: Boolean,
      required: false
    },
    labelFloat: {
      type: Boolean,
      required: false
    },
    bottomLine: {
      type: Boolean,
      required: false
    },
    leadingIcon: {
      type: String,
      required: false
    },
    trailingIcon: {
      type: String,
      required: false
    }
  },
  data () {
    return {
      mdcTextfield: null,
      mdcRipple: null,
      float: false
    }
  },
  mounted () {
    this.mdcTextfield = MDCTextfield.attachTo(this.$el)
    this.float = this.labelFloat
  },
  beforeDestroy () {
    this.mdcTextfield.destroy()

    if (this.interactive && this.box) { this.mdcRipple.destroy() }
  },
  computed: {
    classes () {
      return {
        'mdc-textfield--disabled': this.disabled,
        'mdc-textfield--upgraded': this.upgraded,
        'mdc-textfield--fullwidth': this.fullWidth,
        'mdc-textfield--box': this.box,
        'mdc-textfield--with-leading-icon': this.leadingIcon,
        'mdc-textfield--with-trailing-icon': this.trailingIcon
      }
    },
    classesLabel () {
      return {
        'mdc-textfield__label--float-above': this.float
      }
    }
  },
  methods: {
    onInput (event) {
      debounce(this.$emit('input', event.target.value))
    }
  },
  watch: {
    value() {
      this.value === '' ? this.float = false : this.float = true
    }
  }
}
</script>

<style lang="scss">
@import "@material/textfield/mdc-textfield";
</style>
