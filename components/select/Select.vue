<template>
  <div
    :class="classes"
    class="mdc-select"
    :style="widthStyle"
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
      :id="selectedTextId"
      aria-haspopup="listbox"
      class="mdc-select__selected-text"
      role="button"
      :aria-labelledby="ariaLabelledBy"
    />
    <div
      v-if="enhanced"
      :style="widthStyle"
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
      class="mdc-select__native-control"
      v-bind="$attrs"
      :name="name"
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
    <slot
      v-if="!outlined"
      name="line"
    />
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
      getLeadingIcon: this.getLeadingIcon,
      getMenu: this.getMenu
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
      type: String,
      default: '400px'
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
    },
    selectedTextId: {
      type: String,
      default: 'demo-selected-text'
    }
  },
  data () {
    return {
      mdcSelect: undefined,
      slotObserver: undefined,
      hasPreSelected: this.value.length > 0,
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
    widthStyle () {
      if (this.enhanced) {
        return {
          width: this.width
        }
      }
      return {}
    },
    ariaLabelledBy () {
      if (this.mdcSelect && this.mdcSelect.label_ && this.mdcSelect.label_.root_) {
        return `${this.selectedTextId} ${this.mdcSelect.label_.root_.getAttribute('id')}`
      }
      return this.selectedTextId
    }
  },
  watch: {
    valid (val) {
      this.mdcSelect.valid = val
    },
    required (val) {
      this.mdcSelect.required = val
    },
    enhanced () {
      // todo: basic select will be deprecated so 'enhanced' will also be deprecated
      this.reInstantiate()
    },
    classes () {
      this.reInstantiate()
    },
    disabled (val) {
      this.mdcSelect.disabled = val
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
      if (this.value.length > 0) this.mdcSelect.value = this.value
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
        if (this.enhanced && this.mdcSelect.menu_ instanceof MDCComponent) {
          this.mdcSelect.menu_.emit('_init')
          // todo: use injected method to instantiate component in <m-menu>
        }
      })
    },
    reInstantiate () {
      this.mdcSelect.destroy()
      // https://github.com/material-components/material-components-web/tree/v3.2.0/packages/mdc-select#select-with-pre-selected-option
      this.hasPreSelected = this.value.length > 0
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
      this.$nextTick(() => {
        this.instantiate()
      })
    },
    onChange (event) {
      this.$emit('change', event.detail)
      this.$emit('model', event.detail.value)
    },
    updateSlots () {
      this.hasLeadingIcon = this.$slots.leadingIcon != null
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
    },
    getMenu () {
      return this.mdcSelect.menu_
    }
  }
}
</script>
