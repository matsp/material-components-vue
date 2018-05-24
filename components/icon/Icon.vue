<template>
  <i class="material-icons">
    {{ icon }}
  </i>
</template>

<script>
import { baseComponentMixin, themeClassMixin } from '../base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  props: {
    icon: {
      type: String,
      required: true
    }
  }
}
</script>
