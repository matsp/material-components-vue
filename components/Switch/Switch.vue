<template>
  <div class="mdc-switch" :class="classes">
    <input v-model="model" type="checkbox" class="mdc-switch__native-control" :disabled="disabled" >
    <div class="mdc-switch__background">
      <div class="mdc-switch__knob"/>
    </div>
  </div>
</template>

<script>
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
  computed: {
    classes () {
      return {
        'mdc-switch--disabled': this.disabled
      }
    },
    model: {
      get () {
        return this.checked
      },
      set (state) {
        this.$emit('change', state)
      }
    }
  }
}
</script>

<style lang="scss">
@import "@material/switch/mdc-switch";
</style>
