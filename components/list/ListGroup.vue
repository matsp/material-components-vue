<template>
  <div class="mdc-list-group">
    <slot />
  </div>
</template>

<script>
import { baseComponentMixin, themeClassMixin } from '../base'

export default {
  mixins: [themeClassMixin]
}
</script>
