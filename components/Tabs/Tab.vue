<template>
    <a class="mdc-tab" :class="classes" v-on="$listeners">
        <i v-if="icon" class="material-icons mdc-tab__icon" :aria-label="label" :aria-hidden="label?false:true">
            {{icon}}
        </i>
        <span v-if="icon && label" class="mdc-tab__icon-text">
            <slot>
              {{label}}
            </slot>
        </span>
        <span v-else>
            <slot />
        </span>
    </a>
</template>

<script>
import { MDCTab } from '@material/tabs'

export default {
  props: {
    active: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      required: false
    },
    icon: {
      type: String,
      required: false
    }
  },
  data () {
    return {
      mdcTab: null
    }
  },
  mounted() {
    this.mdcTab = MDCTab.attachTo(this.$el)
  },
  beforeDestroy() {
    this.mdcTab.destroy()
  },
  computed: {
    classes () {
      return {
        'mdc-tab--active': this.active,
        'mdc-tab--with-icon-and-text': this.icon && this.label
      }
    }
  }
}
</script>

<style lang="scss">
@import "@material/tabs/mdc-tabs";
</style>
