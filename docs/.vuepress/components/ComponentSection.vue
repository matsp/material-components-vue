<template>
  <section
    :style="{ 'flex-direction': flexDirection, 'align-items': this.centeringContents ? 'center' : 'normal', 'justify-content': this.centeringContents ? 'center': 'normal' }"
    class="compSection"
  >
    <slot />
  </section>
</template>

<script>
export default {
  props: {
    flexDirection: {
      type: String,
      default: 'row'
    },
    centeringContents: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style>
.compSection {
  display: flex;
  /* height: 200px; */
  /* min-height: 400px; */
  height: auto;
  max-width: 800px;
  margin: 16px;
  padding: 24px;
  background-color: #eeeeee;
}
</style>
