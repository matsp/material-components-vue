<template>
  <nav class="mdc-drawer mdc-drawer--permanent">
    <slot name="toolbarSpacer" />
    <slot />
  </nav>
</template>

<script>
import themeClassMixin from '../../base/themeClassMixin.js'

export default {
  mixins: [themeClassMixin]
}
</script>
