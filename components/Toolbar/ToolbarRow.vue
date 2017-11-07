<template>
    <div class="mdc-toolbar__row">
        <section class="mdc-toolbar__section mdc-toolbar__section--align-start" :class="shrinkClass(shrinkStart)" v-if="$slots['title'] || $slots['start']">
            <slot name="start" />
            <span class="mdc-toolbar__title" v-if="$slots['title']">
                <slot name="title" />
            </span>
        </section>
        <section class="mdc-toolbar__section" :class="shrinkClass(shrinkCenter)" v-if="$slots['center']">
            <slot name="center" />
        </section>
        <section class="mdc-toolbar__section mdc-toolbar__section--align-end" :class="shrinkClass(shrinkEnd)" v-if="$slots['end']">
            <slot name="end" />
        </section>
    </div>
</template>

<script>
export default {
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

<style lang="scss">
@import "@material/toolbar/mdc-toolbar";
</style>
