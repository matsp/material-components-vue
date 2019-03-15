<template>
  <h6
    v-if="$parent.$options._componentTag === 'm-drawer-list'"
    class="mdc-list-group__subheader"
  >
    <slot />
  </h6>
  <h3
    v-else
    class="mdc-list-group__subheader"
  >
    <slot />
  </h3>
</template>

<script>
import { baseComponentMixin, themeClassMixin } from '../base'

export default {
  mixins: [baseComponentMixin, themeClassMixin]
}
</script>
