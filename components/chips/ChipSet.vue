<script>
import { MDCChipSet } from '@material/chips'

import { baseComponentMixin, themeClassMixin } from '../base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  props: {
    choice: {
      type: Boolean,
      default: false
    },
    filter: {
      type: Boolean,
      default: false
    },
    input: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    choice () {
      this.needReInstantiate = true
    },
    filter () {
      this.needReInstantiate = true
    },
    input () {
      this.needReInstantiate = true
    }
  },
  created () {
    this.map = new WeakMap()
  },
  provide () {
    return {
      getChipInstance: this.getChipInstance,
      isFilter: () => this.filter,
      isInput: () => this.input,
      isChoice: () => this.choice
    }
  },
  mounted () {
    this.instantiate()
  },
  activated () {
    this.instantiate()
  },
  beforeUpdate () {
    if (this.needReInstantiate) {
      this.destroy()
    }
  },
  updated () {
    if (this.mdcChipSet != null && this.$el.querySelectorAll('.mdc-chip').length < this.mdcChipSet.chips_.length) this.needReInstantiate = true // no removeChip method, so it's better to re-instantiate
    if (this.needReInstantiate) {
      this.instantiate()
    } else {
      const initChipsEls = new Set(this.mdcChipSet.chips_.map(i => i.root_))
      const toCallbacks = new Set();
      [...this.$el.querySelectorAll('.mdc-chip')].filter(e => !initChipsEls.has(e)).forEach(e => {
        this.mdcChipSet.addChip(e)
        toCallbacks.add(e)
      })
      this.mdcChipSet.chips_.forEach(chip => {
        if (this.map.has(chip.root_) && toCallbacks.has(chip.root_)) {
          this.map.get(chip.root_)(chip)
        }
      })
    }
    this.needReInstantiate = false
  },
  deactivated () {
    this.destroy()
  },
  beforeDestroy () {
    this.destroy()
  },
  methods: {
    getChipInstance (el, cb) {
      this.map.set(el, cb)
    },
    onInteraction (e) {
      this.$emit('interaction', e.detail)
    },
    onSelection (e) {
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
    },
    instantiate () {
      if (this.mdcChipSet == null) {
        this.mdcChipSet = MDCChipSet.attachTo(this.$el)
        this.mdcChipSet.chips_.forEach(chip => {
          if (this.map.has(chip.root_)) {
            this.map.get(chip.root_)(chip)
          }
        })
      }
    },
    destroy () {
      if (this.mdcChipSet != null && typeof this.mdcChipSet.destroy === 'function') {
        this.mdcChipSet.destroy()
        this.mdcChipSet = null
      }
    }
  },
  render (h) {
    return h('div', {
      class: {
        'mdc-chip-set': true,
        'mdc-chip-set--choice': this.choice,
        'mdc-chip-set--filter': this.filter,
        'mdc-chip-set--input': this.input
      },
      attrs: {
        role: 'grid'
      },
      on: {
        ...this.$listeners

      }
    }, this.$scopedSlots.default())
  }
}
</script>
