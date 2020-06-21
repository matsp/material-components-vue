<script>
import { baseComponentMixin, themeClassMixin } from '../base'
import { MDCChip } from '@material/chips'
import destroyHelper from '../../utils/destroyHelper'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  model: {
    prop: 'selected',
    event: '_change'
  },
  props: {
    selected: {
      type: Boolean,
      default: false
    },
    shouldRemoveOnTrailingIconClick: {
      type: Boolean,
      default: true
    },
    deletable: {
      type: Boolean,
      default: false
    }
  },
  inject: {
    getChipInstance: {
      default: null
    },
    isFilter: {
      default: () => false
    },
    isInput: {
      default: () => false
    },
    isChoice: {
      default: () => false
    }
  },
  watch: {
    selected (val) {
      if (this.mdcChip instanceof MDCChip) {
        this.mdcChip.selected = val
        this.preventReRender = true
      }
    },
    shouldRemoveOnTrailingIconClick (val) {
      if (this.mdcChip instanceof MDCChip) {
        this.mdcChip.shouldRemoveOnTrailingIconClick = val
      }
    }
  },
  mounted () {
    if (this.getChipInstance) {
      this.getChipInstance(this.$el, this.instantiateCallback)
    } else {
      this.instantiateItself()
    }
  },
  activated () {
    if (this.getChipInstance) {
      this.getChipInstance(this.$el, this.instantiateCallback)
    } else {
      this.instantiateItself()
    }
  },
  updated () {
    if (this.getChipInstance) {
      this.getChipInstance(this.$el, this.instantiateCallback)
    } else {
      this.instantiateItself()
    }
    this.preventReRender = false
  },
  deactivated () {
    this.destroy()
  },
  beforeDestroy () {
    this.destroy()
  },
  methods: {
    beginExit () {
      this.mdcChip.beginExit()
    },
    focusPrimaryAction () {
      this.mdcChip.focusPrimaryAction()
    },
    focusTrailingAction () {
      this.mdcChip.focusTrailingAction()
    },
    instantiateItself () {
      if (this.mdcChip == null) {
        this.mdcChip = MDCChip.attachTo(this.$el)
      }
    },
    instantiateCallback (instance) {
      this.mdcChip = instance
    },
    destroy () {
      destroyHelper(this, 'mdcChip')
    },
    onInteraction (e) {
      this.$emit('interaction', e.detail)
    },
    onSelection (e) {
      if (e.detail.chipId === this.$el.id) {
        this.$emit('_change', e.detail.selected)
        this.preventReRender = true
      }
      this.$emit('selection', e.detail)
    },
    onRemoval (e) {
      this.$emit('removal', e.detail)
    },
    onTrailingIconInteraction (e) {
      this.$emit('trailingIconInteraction', e.detail)
    },
    onNavigation (e) {
      this.$emit('navigation', e.detail)
    }
  },
  render (h) {
    const data = {
      class: {
        'mdc-chip--deletable': this.deletable,
        'mdc-chip': true
      },
      attrs: {
        role: 'row',
        ...this.$attrs
      },
      on: {
        ...this.$listeners,
        'MDCChip:interaction': this.onInteraction,
        'MDCChip:selection': this.onSelection,
        'MDCChip:removal': this.onRemoval,
        'MDCChip:trailingIconInteraction': this.onTrailingIconInteraction,
        'MDCChip:navigation': this.onNavigation
      }
    }
    if (this.preventReRender) {
      data.class['mdc-chip--selected'] = this.defaultsToBeSelected
    } else {
      this.defaultsToBeSelected = this.selected
      data.class['mdc-chip--selected'] = this.selected && (this.isChoice() || this.isFilter())
    }
    const children = [h('div', { class: { 'mdc-chip__ripple': true } })]
    const leadingIcon = this.$scopedSlots.leadingIcon
      ? this.$scopedSlots
        .leadingIcon()
        .filter(i => i.text == null && !i.isComment)
      : null
    if (leadingIcon != null && leadingIcon.length > 0) {
      if (leadingIcon[0].data.class == null) leadingIcon[0].data.class = {}
      leadingIcon[0].data.class['mdc-chip__icon'] = true
      leadingIcon[0].data.class['mdc-chip__icon--leading'] = true
      if (this.preventReRender) {
        leadingIcon[0].data.class['mdc-chip__icon--leading-hidden'] = this.defaultsToBeSelected && this.isFilter()
      } else {
        leadingIcon[0].data.class['mdc-chip__icon--leading-hidden'] = this.isFilter() && this.selected
      }
      children.push(leadingIcon[0])
    }
    if (this.isFilter()) {
      children.push(
        h(
          'span',
          {
            class: {
              'mdc-chip__checkmark': true
            }
          },
          [
            h(
              'svg',
              {
                class: {
                  'mdc-chip__checkmark-svg': true
                },
                attrs: {
                  viewBox: '-2 -3 30 30'
                }
              },
              [
                h('path', {
                  class: {
                    'mdc-chip__checkmark-path': true
                  },
                  attrs: {
                    fill: 'none',
                    stroke: 'black',
                    d: 'M1.73,12.91 8.1,19.28 22.79,4.59'
                  }
                })
              ]
            )
          ]
        )
      )
    }
    // default slots
    children.push(
      h(
        'span',
        {
          attrs: {
            role: 'gridcell'
          }
        },
        [
          h(
            'span',
            {
              class: {
                'mdc-chip__primary-action': true
              },
              attrs: {
                role: this.isFilter()
                  ? 'checkbox'
                  : this.isChoice()
                    ? 'radio'
                    : 'button',
                tabindex: '0',
                'aria-checked':
                  this.isFilter() || this.isChoice()
                    ? String(this.defaultsToBeSelected)
                    : false
              }
            },
            [
              h(
                'span',
                {
                  class: {
                    'mdc-chip__text': true
                  }
                },
                this.$scopedSlots.default()
              )
            ]
          )
        ]
      )
    )
    const trailingIcon = this.$scopedSlots.trailingIcon
      ? this.$scopedSlots
        .trailingIcon()
        .filter(i => i.text == null && !i.isComment)
      : null
    if (trailingIcon != null && trailingIcon.length > 0 && this.isInput()) {
      if (trailingIcon[0].data.class == null) trailingIcon[0].data.class = {}
      trailingIcon[0].data.class['mdc-chip__icon'] = true
      trailingIcon[0].data.class['mdc-chip__icon--trailing'] = true
      if (trailingIcon[0].data.attrs == null) trailingIcon[0].data.attrs = {}
      trailingIcon[0].data.attrs.tabindex = '-1'
      trailingIcon[0].data.attrs.role = 'button'
      children.push(
        h('span', { attrs: { role: 'gridcell' } }, [trailingIcon[0]])
      )
    }
    return h('div', data, children)
  }
}
</script>
