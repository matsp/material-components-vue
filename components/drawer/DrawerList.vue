<template>
  <nav
    class="mdc-list"
  >
    <slot />
  </nav>
</template>

<script>
import { baseComponentMixin, themeClassMixin } from '../base'

export default {
  name: 'DrawerList',
  mixins: [baseComponentMixin, themeClassMixin]
}
</script>
