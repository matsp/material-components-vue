<template>
  <div
    :class="classes"
    class="mdc-chip-set"
    @MDCChip:selection="onSelection"
  >
    <slot />
  </div>
</template>

<script>
import { MDCChipSet, chipSetStrings, chipCssClasses } from '@material/chips'

import { baseComponentMixin, themeClassMixin } from '../base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  model: {
    prop: 'selectedChipIds',
    event: 'change'
  },
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
    },
    selectedChipIds: {
      type: Array,
      default: () => []
    }
  },
  provide () {
    return {
      getChipInstance: this.getChipInstance,
      getFilter: () => this.filter
    }
  },
  data () {
    return {
      mdcChipSet: undefined,
      slotObserver: undefined
    }
  },
  computed: {
    classes () {
      return {
        'mdc-chip-set--choice': this.choice,
        'mdc-chip-set--filter': this.filter,
        'mdc-chip-set--input': this.input
      }
    }
  },
  watch: {
    classes () {
      this.reInstantiate()
    }
  },
  mounted () {
    this.slotObserver = new MutationObserver(() => this.updateSlots()) // use for automatically call addChip
    this.slotObserver.observe(this.$el, {
      childList: true,
      subtree: true
    })
    this.instantiate()
  },
  beforeDestroy () {
    this.mdcChipSet.destroy()
  },
  methods: {
    getChipInstance (id) {
      for (const chip of this.mdcChipSet.chips) {
        if (chip.id === id) return chip
      }
      return null
    },
    reInstantiate () {
      this.mdcChipSet.destroy()
      this.instantiate()
    },
    instantiate () {
      this.mdcChipSet = MDCChipSet.attachTo(this.$el)
      for (const chip of this.mdcChipSet.chips) {
        chip.emit('_init')
      }
      for (const id of this.selectedChipIds) {
        this.mdcChipSet.getDefaultFoundation().select(id)
      }
    },
    updateSlots () {
      const chipsElms = this.mdcChipSet.chips.map(chip => chip.root_)
      const addedIds = []
      this.$el.querySelectorAll(chipSetStrings.CHIP_SELECTOR).forEach(chipEl => {
        if (!chipsElms.includes(chipEl) && !chipEl.classList.contains(chipCssClasses.CHIP_EXIT)) {
          console.log(chipEl)
          this.mdcChipSet.addChip(chipEl)
          addedIds.push(chipEl.id)
        }
      })
      this.$nextTick(() => {
        this.mdcChipSet.chips.filter(chip => addedIds.includes(chip.root_.id)).forEach(chip => chip.emit('_init'))
      })
    },
    onSelection () {
      this.$emit('change', this.mdcChipSet.selectedChipIds)
    }
  }
}
</script>
