<template>
  <i
    class="material-icons"
    v-on="$listeners">
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
