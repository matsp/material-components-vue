<template>
  <div class="mdc-typography">
    <slot />
  </div>
</template>

<script>
import { baseComponentMixin, themeClassMixin } from '@components/base'

export default {
  mixins: [baseComponentMixin, themeClassMixin]
}
</script>
