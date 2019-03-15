<template>
  <h6
          class="mdc-list-group__subheader"
          v-if="$parent._vnode.tag.toUpperCase() === 'NAV'"
  >
    <slot />
  </h6>
  <h3
          class="mdc-list-group__subheader"
          v-else
  >
    <slot/>
  </h3>
</template>

<script>
  import { baseComponentMixin, themeClassMixin } from '../base'

  export default {
  mixins: [baseComponentMixin, themeClassMixin]
}
</script>
