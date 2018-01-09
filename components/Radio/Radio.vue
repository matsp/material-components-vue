<template>
  <div class="mdc-radio">
    <input class="mdc-radio__native-control" :class="classes" type="radio" v-bind="$attrs" :checked="checked" @change="onChange">
    <div class="mdc-radio__background">
      <div class="mdc-radio__outer-circle"/>
      <div class="mdc-radio__inner-circle"/>
    </div>
  </div>
</template>

<script>
import { MDCRadio } from '@material/radio'

export default {
  props: {
    checked: {
      type: Boolean,
      required: false
    },
    disabled: {
      type: Boolean,
      required: false
    }
  },
  model: {
    prop: 'checked',
    event: 'change'
  },
  data () {
    return {
      mdcRadio: null
    }
  },
  mounted () {
    this.mdcRadio = MDCRadio.attachTo(this.$el)
    this.mdcRadio.checked = this.checked
    this.mdcRadio.disabled = this.disabled
  },
  beforeDestroy () {
    this.mdcRadio.destroy()
  },
  methods: {
    onChange (event) {
      this.$emit('change', event.target.value === 'on')
    }
  },
  computed: {
    classes () {
      return {
        'mdc-radio--disabled': this.disabled
      }
    }
  }
}
</script>

<style lang="scss">
@import "@material/radio/mdc-radio";
</style>
