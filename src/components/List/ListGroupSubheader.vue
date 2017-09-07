<template>
  <span>
    <h1 v-if="heading === 1" class="mdc-list-group__subheader" :id="id">{{text}}</h1>
    <h2 v-if="heading === 2" class="mdc-list-group__subheader" :id="id">{{text}}</h2>
    <h3 v-if="heading === 3" class="mdc-list-group__subheader" :id="id">{{text}}</h3>
  </span>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: false
    },
    text: {
      type: String,
      required: false
    },
    heading: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss">
@import "@material/list/mdc-list";
</style>
