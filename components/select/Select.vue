<template>
  <div
    :class="classes"
    class="mdc-select"
    @MDCSelect:change="onChange"
  >
    <slot name="leadingIcon" />
    <input
      v-if="enhanced && name"
      :name="name"
      type="hidden"
    >
    <i class="mdc-select__dropdown-icon" />
    <div
      v-if="enhanced"
      :id="$attrs.id"
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
          v-if="!hasPreSelected"
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
      :disabled="disabled"
      class="mdc-select__native-control"
      v-bind="$attrs"
    >
      <option
        v-if="!hasPreSelected"
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
import { MDCComponent } from '@material/base/component'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  provide () {
    return {
      getLabel: this.getLabel,
      getLineRipple: this.getLineRipple,
      getOutline: this.getOutline,
      getHelperText: this.getHelperText,
      getLeadingIcon: this.getLeadingIcon
    }
  },
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
    valid: {
      type: Boolean,
      default: true
    },
    required: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      mdcSelect: undefined,
      slotObserver: undefined,
      hasPreSelected: true,
      hasLeadingIcon: false
    }
  },
  computed: {
    classes () {
      return {
        'mdc-select--outlined': this.outlined,
        'mdc-select--with-leading-icon': this.hasLeadingIcon
      }
    },
    ariaLabelledby () {
      const ret = this.$attrs.id
      this.$slots.label.forEach(v => {
        if (v.elm instanceof HTMLElement) {
          return `${ret} ${v.elm.id}`
        }
      })
      return ret
    }
  },
  watch: {
    valid () {
      this.mdcSelect.valid = this.valid
    },
    required () {
      this.mdcSelect.required = this.required
    },
    enhanced () {
      this.reInstantiate()
    },
    classes () {
      this.reInstantiate()
    }
  },
  mounted () {
    this.updateSlots()
    this.slotObserver = new MutationObserver(() => this.updateSlots())
    this.slotObserver.observe(this.$el, {
      childList: true,
      subtree: true
    })
    this.instantiate()
  },
  beforeDestroy () {
    this.mdcSelect.destroy()
    this.slotObserver.disconnect()
  },
  methods: {
    instantiate () {
      this.mdcSelect = MDCSelect.attachTo(this.$el)
      this.mdcSelect.valid = this.valid
      this.mdcSelect.required = this.required
      this.mdcSelect.disabled = this.disabled
      this.$nextTick(() => { // wait for the DOM change
        // tell all the children that the parent is initialized
        if (this.mdcSelect.label_ instanceof MDCComponent) {
          this.mdcSelect.label_.emit('_init')
        }
        if (this.mdcSelect.outline_ instanceof MDCComponent) {
          this.mdcSelect.outline_.emit('_init')
        }
        if (this.mdcSelect.lineRipple_ instanceof MDCComponent) {
          this.mdcSelect.lineRipple_.emit('_init')
        }
        if (this.mdcSelect.helperText_ instanceof MDCComponent) {
          this.mdcSelect.helperText_.emit('_init', this.mdcSelect.helperText_)
        }
        if (this.mdcSelect.leadingIcon_ instanceof MDCComponent) {
          this.mdcSelect.leadingIcon_.emit('_init')
        }
      })
    },
    reInstantiate () {
      this.mdcSelect.destroy()
      this.instantiate()
    },
    onChange (event) {
      this.$emit('change', event.detail)
      this.$emit('model', event.detail.value)
    },
    updateSlots () {
      this.hasLeadingIcon = this.$slots.leadingIcon != null
      if (this.enhanced) {
        this.$slots.default.forEach(v => {
          if (v.elm instanceof HTMLLIElement) {
            v.elm.setAttribute('role', 'option')
            if (v.elm.getAttribute('data-value') === this.value) {
              v.elm.setAttribute('aria-selected', 'true')
              this.hasPreSelected = true
            } else {
              v.elm.setAttribute('aria-selected', 'false')
            }
          }
        })
      } else {
        this.$slots.default.forEach(v => {
          if (v.elm instanceof HTMLOptionElement) {
            if (v.elm.value === this.value) {
              v.elm.selected = true
              this.hasPreSelected = true
            }
          }
        })
      }
    },
    getLabel () {
      return this.mdcSelect.label_
    },
    getLineRipple () {
      return this.mdcSelect.lineRipple_
    },
    getOutline () {
      return this.mdcSelect.outline_
    },
    getHelperText () {
      return this.mdcSelect.helperText_
    },
    getLeadingIcon () {
      return this.mdcSelect.leadingIcon_
    }
  }
}
</script>
