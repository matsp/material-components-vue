<template>
  <div class="mdc-toolbar__row">
    <section
      v-if="$slots['default'] || $slots['start']"
      :class="shrinkClass(shrinkStart)"
      class="mdc-toolbar__section mdc-toolbar__section--align-start">
      <slot name="start" />
      <span
        v-if="$slots['default']"
        class="mdc-toolbar__title">
        <slot />
      </span>
    </section>
    <section
      v-if="$slots['center']"
      :class="shrinkClass(shrinkCenter)"
      class="mdc-toolbar__section">
      <slot name="center" />
    </section>
    <section
      v-if="$slots['end']"
      :class="shrinkClass(shrinkEnd)"
      class="mdc-toolbar__section mdc-toolbar__section--align-end">
      <slot name="end" />
    </section>
  </div>
</template>

<script>
import { baseComponentMixin, themeClassMixin } from '../base'

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  props: {
    shrinkStart: {
      type: Boolean,
      required: false
    },
    shrinkCenter: {
      type: Boolean,
      required: false
    },
    shrinkEnd: {
      type: Boolean,
      required: false
    }
  },
  methods: {
    shrinkClass (prop) {
      return {
        'mdc-toolbar__section--shrink-to-fit': prop
      }
    }
  }
}
</script>
