<template>
  <div class="mdc-drawer__toolbar-spacer">
    <slot/>
  </div>
</template>

<script>
import { baseComponentMixin, themeClassMixin } from '../base'

export default {
  mixins: [baseComponentMixin, themeClassMixin]
}
</script>
