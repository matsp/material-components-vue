<template>
  <nav class="mdc-drawer mdc-drawer--permanent">
    <slot name="toolbarSpacer" />
    <slot />
  </nav>
</template>

<script>
import { baseComponentMixin, themeClassMixin } from '../../base'

export default {
  mixins: [baseComponentMixin, themeClassMixin]
}
</script>
