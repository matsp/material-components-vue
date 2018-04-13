<template>
  <div class="mdc-drawer__toolbar-spacer">
    <slot/>
  </div>
</template>

<script>
import themeClassMixin from '../base/themeClassMixin.js'

export default {
  mixins: [themeClassMixin]
}
</script>
