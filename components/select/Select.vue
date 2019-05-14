<template>
  <div
    :class="classes"
    class="mdc-select"
    @MDCSelect:change="onChange"
  >
    <input
      v-if="enhanced && name"
      :name="name"
      type="hidden"
    >
    <i class="mdc-select__dropdown-icon" />
    <div
      v-if="enhanced"
      :id="id"
      :aria-labelledby="ariaLabelledby"
      aria-haspopup="listbox"
      class="mdc-select__selected-text"
      role="button"
    />
    <div
      v-if="enhanced"
      :style="{ width: width }"
      class="mdc-select__menu mdc-menu mdc-menu-surface"
      role="listbox"
    >
      <ul class="mdc-list">
        <li
          aria-selected="true"
          class="mdc-list-item mdc-list-item--selected"
          data-value=""
          role="option"
        />
        <slot />
      </ul>
    </div>
    <select
      v-else
      :id="id"
      :aria-describedby="ariaDescribedby"
      :disabled="disabled"
      class="mdc-select__native-control"
      v-bind="$attrs"
    >
      <option
        v-if="$slots['label']"
        disabled
        selected
        value=""
      />
      <slot />
    </select>
    <div
      v-if="outlined"
      class="mdc-notched-outline"
    >
      <div class="mdc-notched-outline__leading" />
      <div class="mdc-notched-outline__notch">
        <slot name="label" />
      </div>
      <div class="mdc-notched-outline__trailing" />
    </div>
    <slot
      v-else
      name="label"
    />
    <slot name="line" />
  </div>
</template>

<script>
import { MDCSelect } from '@material/select'

import { baseComponentMixin, themeClassMixin } from '../base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  model: {
    prop: 'value',
    event: 'model'
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    outlined: {
      type: Boolean,
      default: false
    },
    enhanced: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    width: {
      type: Number,
      default: 400
    },
    id: {
      type: String,
      required: true
    },
    ariaDescribedby: {
      type: String,
      default: ''
    },
    valid: {
      type: Boolean,
      default: true
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      mdcSelect: undefined,
      slotObserver: undefined
    }
  },
  computed: {
    classes () {
      return {
        'mdc-select--disabled': this.disabled,
        'mdc-select--outlined': this.outlined
      }
    },
    ariaLabelledby () {
      let ret = this.id
      if (this.$slots['label'] && this.$slots['label'].length === 1) {
        ret = ret + ' ' + this.$slots['label'][0].data.attrs.id
      }
      return ret
    }
  },
  watch: {
    valid () {
      this.mdcSelect.valid = this.valid
    },
    required () {
      this.mdcSelect.required = this.required
    }
  },
  mounted () {
    this.mdcSelect = MDCSelect.attachTo(this.$el)
    this.mdcSelect.valid = this.valid
    this.mdcSelect.required = this.required
    this.slotObserver = new MutationObserver(() => this.updateSlots())
    this.slotObserver.observe(this.$el, {
      childList: true,
      subtree: true
    })
    this.updateSlots()
  },
  beforeDestroy () {
    this.mdcSelect.destroy()
    if (typeof this.mdcNotchedOutline !== 'undefined') {
      this.mdcNotchedOutline.destroy()
    }
    this.slotObserver.disconnect()
  },
  methods: {
    onChange (event) {
      this.$emit('change', event.detail)
      this.$emit('model', event.detail.value)
    },
    updateSlots () {
      if (this.enhanced && this.$slots.default) {
        this.$slots.default.map(n => {
          if (n.tag) {
            n.elm.setAttribute('role', 'option')
          }
        })
      }
    }
  }
}
</script>
