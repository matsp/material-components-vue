<template>
  <nav
    class="mdc-list"
  >
    <slot />
  </nav>
</template>

<script>
import { baseComponentMixin, themeClassMixin } from '@components/base'

export default {
  name: 'DrawerList',
  mixins: [baseComponentMixin, themeClassMixin]
}
</script>
