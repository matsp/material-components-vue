<template>
  <i class="material-icons">
    {{ icon }}
  </i>
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
