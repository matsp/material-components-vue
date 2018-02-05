<template>
  <div
    class="mdc-select"
    tabindex="0"
    :aria-disabled="disabled"
    role="listbox"
    @MDCSelect:change="onChange">
    <div
      class="mdc-select__surface"
      tabindex="0">
      <div class="mdc-select__label">
        <slot />
      </div>
      <div class="mdc-select__selected-text" />
      <div class="mdc-select__bottom-line" />
    </div>
    <slot name="menu" />
  </div>
</template>

<script>
import { MDCSelect } from '@material/select'

export default {
  model: {
    prop: 'selected',
    event: 'change'
  },
  props: {
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data () {
    return {
      mdcSelect: null
    }
  },
  mounted () {
    if (this.$slots.menu) {
      this.$slots.menu[0].elm.classList.add('mdc-select__menu')

      this.$slots.menu[0].componentOptions.children[0].componentOptions.children.map(n => {
        if (n.elm.className.includes('mdc-list-item')) {
          n.elm.setAttribute('role', 'option')
        }
      })
    }

    this.mdcSelect = MDCSelect.attachTo(this.$el)
  },
  destroy () {
    this.mdcSelect.destroy()
  },
  methods: {
    onChange (event) {
      this.$emit('change', this.mdcSelect.value)
    }
  }
}
</script>

<style lang="scss">
@import "@material/select/mdc-select";
</style>
