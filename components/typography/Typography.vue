<template>
  <div class="mdc-typography">
    <slot />
  </div>
</template>

<script>
import { baseComponentMixin, themeClassMixin } from '../base'

export default {
  mixins: [themeClassMixin]
}
</script>
