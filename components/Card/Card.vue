<template>
  <div
    class="mdc-card"
    :class="classes">
    <div
      class="mdc-card__horizontal-block"
      v-if="horizontal && ($slots['horizontalMedia'] || $slots['horizontalTitle'] || $slots['horizontalSubtitle'])">
      <section class="mdc-card__primary">
        <section
          class="mdc-card__media"
          v-if="$slots['horizontalMedia']">
          <slot name="horizontalMedia"/>
        </section>
        <div
          class="mdc-card__title"
          :class="classesTitle"
          v-if="$slots['horizontalTitle']">
          <slot name="horizontalTitle"/>
        </div>
        <div
          class="mdc-card__subtitle"
          v-if="$slots['horizontalSubtitle']">
          <slot name="horizontalSubtitle"/>
        </div>
      </section>
    </div>
    <section
      class="mdc-card__primary"
      v-else-if="!horizontal && ($slots['media'] || $slots['title'] || $slots['subtitle'])">
      <section
        class="mdc-card__media"
        v-if="$slots['media']">
        <slot name="media"/>
      </section>
      <div
        class="mdc-card__title"
        :class="classesTitle"
        v-if="$slots['title']">
        <slot name="title"/>
      </div>
      <div
        class="mdc-card__subtitle"
        v-if="$slots['subtitle']">
        <slot name="subtitle"/>
      </div>
    </section>
    <section
      class="mdc-card__supporting-text"
      v-if="$slots['supportingText']">
      <slot name="supportingText" />
    </section>
    <section
      class="mdc-card__actions"
      :class="classesActions"
      v-if="$slots['actions']">
      <slot name="actions" />
    </section>
  </div>
</template>

<script>
export default {
  props: {
    verticalActions: {
      type: Boolean,
      default: false
    },
    largeTitle: {
      type: Boolean,
      default: false
    },
    horizontal: {
      type: Boolean,
      default: false
    },
    stroked: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classesActions () {
      return {
        'mdc-card__actions--vertical': this.verticalActions
      }
    },
    classesTitle () {
      return {
        'mdc-card__title--large': this.largeTitle
      }
    },
    classes () {
      return {
        'mdc-card--stroked': this.stroked
      }
    }
  },
  mounted () {
    if (this.$slots.actions) {
      this.$slots.actions.map((n) => {
        n.elm.classList.add('mdc-card__action')
      })
    }
  }
}
</script>

<style lang="scss">
@import "@material/card/mdc-card";
</style>
