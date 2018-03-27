<template>
  <li class="mdc-image-list__item">
    <div
      v-if="adjustAspectRatio" 
      class="mdc-image-list__image-aspect-container">
      <img
        class="mdc-image-list__image"
        :src="src">
    </div>
    <img
      v-else
      class="mdc-image-list__image"
      :src="src">
    <div class="mdc-image-list__supporting">
      <span class="mdc-image-list__label">
        <slot/>
      </span>
    </div>
  </li>
</template>

<script>
export default  {
  props: {
    src: {
      type: String,
      required: true
    },
    adjustAspectRatio: {
      type: boolean,
      default: true
    }
  }
}
</script>
