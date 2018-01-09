<template>
  <a class="material-icons" v-on="$listeners">
    {{ icon }}
  </a>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    }
  }
}
</script>
