<template>
    <div class="mdc-select" tabindex="0" :aria-disabled="disabled" role="listbox" @MDCSelect:change="onChange">
      <div class="mdc-select__surface" ref="surface">
        <div class="mdc-select__label">
          <slot />
          </div>
        <div class="mdc-select__selected-text" />
        <div class="mdc-select__bottom-line" />  
      </div>
      <div class="mdc-simple-menu mdc-select__menu">
        <ul class="mdc-list mdc-simple-menu__items">
          <slot name="options" />
        </ul>
      </div>
    </div>
</template>

<script>
import { MDCSelect } from '@material/select'

export default {
  props: {
    disabled: {
      type: Boolean,
      required: false
    }
  },
  model: {
    prop: 'selected',
    event: 'change'
  },
  data() {
    return {
      mdcSelect: null
    }
  },
  mounted() {
    this.mdcSelect = MDCSelect.attachTo(this.$refs.surface)
  },
  destroy() {
    this.mdcSelect.destroy()
  },
  methods: {
    onChange(event) {
      this.$emit('change', this.mdcSelect.value)
    }
  }
}
</script>

<style lang="scss">
@import "@material/select/mdc-select";
@import "@material/menu/mdc-menu";
@import "@material/list/mdc-list";
</style>
