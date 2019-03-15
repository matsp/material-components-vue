<template>
    <button
            class="material-icons"
            v-if="$parent.$options._componentTag === 'm-top-app-bar'"
            v-on="$listeners"
    >
        {{ icon }}
    </button>
    <span
            class="material-icons"
            v-else-if="$parent._vnode.tag.toUpperCase() === 'LI' || $parent.$options._componentTag === 'm-tab'"
            v-on="$listeners"
    >
    {{ icon }}
  </span>
    <i
            class="material-icons"
            v-else
            v-on="$listeners"
    >
    {{ icon }}
  </i>
</template>

<script>
  import { baseComponentMixin, themeClassMixin } from '../base'

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
