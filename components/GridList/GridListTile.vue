<template>
  <li
    class="mdc-grid-tile"
    v-on="$listeners">
    <div class="mdc-grid-tile__primary">
      <slot name="primary">
        <img
          v-if="imgSrc"
          class="mdc-grid-tile__primary-content"
          :src="imgSrc">
      </slot>
    </div>
    <span
      v-if="$slots['default']"
      class="mdc-grid-tile__secondary">
      <span class="mdc-grid-tile__title">
        <slot />
      </span>
      <slot name="icon"/>
      <slot name="supporttext"/>
    </span>
  </li>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      default: ''
    }
  },
  mounted () {
    if (this.$slots.supporttext) {
      this.$slots.supporttext.map(n =>
        n.elm.classList.add('mdc-grid-tile__support-text')
      )
    }

    if (this.$slots.icon) {
      this.$slots.icon.map(n => {
        n.elm.classList.add('mdc-grid-tile__icon')
      })
    }

    if (this.$slots.primary) {
      this.$slots.primary.map(n =>
        n.elm.classList.add('mdc-grid-tile__primary-content')
      )
    }
  }
}
</script>
