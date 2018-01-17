<template>
  <div
    class="mdc-simple-menu"
    :class="classes"
    tabindex="-1"
    @MDCSimpleMenu:selected="onSelect"
    @MDCSimpleMenu:cancel="onCancel">
    <slot
    role="menu"/>
  </div>
</template>

<script>
import { MDCSimpleMenu } from '@material/menu'

export default {
  model: {
    prop: 'selected',
    event: 'change'
  },
  props: {
    startOpen: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data () {
    return {
      mdcSimpleMenu: null
    }
  },
  computed: {
    classes () {
      return {
        'mdc-simple-menu--open': this.startOpen
      }
    }
  },
  mounted () {
    if (this.$slots.default) {
      this.$slots.default.map(n => {
        n.elm.classList.add('mdc-simple-menu__items')
      })
    }
    
    this.mdcSimpleMenu = MDCSimpleMenu.attachTo(this.$el)
    this.mdcSimpleMenu.open = this.open
  },
  beforeDestroy () {
    this.mdcSimpleMenu.destroy()
  },
  methods: {
    show () {
      this.mdcSimpleMenu.show()
    },
    hide () {
      this.mdcSimpleMenu.hide()
    },
    onSelect (event) {
      this.$emit('change', event.detail.index)
    },
    onCancel (event) {
      this.$emit('canceled')
    }
  }
}
</script>

<style lang="scss">
@import "@material/menu/mdc-menu";
</style>
