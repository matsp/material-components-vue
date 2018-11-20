<template>
  <nav class="mdc-drawer">
    <slot name="toolbarSpacer" />
    <slot name="header" />
    <slot />
  </nav>
</template>

<script>
import { baseComponentMixin, themeClassMixin } from '../../base'

export default {
  mixins: [baseComponentMixin, themeClassMixin]
}
</script>
