<template>
  <button
    v-if="$parent.$options._componentTag === 'm-top-app-bar'"
    class="material-icons"
    v-on="$listeners"
  >
    {{ icon }}
  </button>
  <span
    v-else-if="$parent.$options._componentTag === 'm-list-item' || $parent.$options._componentTag === 'm-tab'"
    class="material-icons"
    v-on="$listeners"
  >
    {{ icon }}
  </span>
  <i
    v-else
    class="material-icons"
    v-on="$listeners"
  >
    {{ icon }}
  </i>
</template>

<script>
import { baseComponentMixin, themeClassMixin } from '@components/base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  props: {
    icon: {
      type: String,
      required: true
    }
  }
}
</script>
