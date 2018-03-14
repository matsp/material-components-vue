<template>
  <a
    class="material-icons"
    v-on="$listeners">
    {{ icon }}
  </a>
</template>

<script>
import themeClassMixin from '../base/themeClassMixin.js'

export default {
  mixins: [themeClassMixin],
  props: {
    icon: {
      type: String,
      required: true
    }
  }
}
</script>
