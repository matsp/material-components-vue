<template>
  <div class="mdc-card" :class="classes" :id="id">
    <div class="mdc-card__horizontal-block" v-if="horizontal && ($slots['cardHorizontalMedia'] || $slots['cardHorizontalTitle'] || $slots['cardHorizontalSubtitle'])">
        <section class="mdc-card__primary" >
          <section class="mdc-card__media" v-if="$slots['cardHorizontalMedia']">
            <slot name="cardHorizontalMedia" />
          </section>
          <div class="mdc-card__title" :class="classesTitle" v-if="$slots['cardHorizontalTitle']">
            <slot name="cardHorizontalTitle" />
          </div>
          <div class="mdc-card__subtitle" v-if="$slots['cardHorizontalSubtitle']">
            <slot name="cardHorizontalSubtitle" />
          </div>
        </section>
    </div>
    <section class="mdc-card__primary" v-else-if="!horizontal && ($slots['cardMedia'] || $slots['cardTitle'] || $slots['cardSubtitle'])">
      <section class="mdc-card__media" v-if="$slots['cardMedia']">
        <slot name="cardMedia" />
      </section>
      <div class="mdc-card__title" :class="classesTitle" v-if="$slots['cardTitle']">
        <slot name="cardTitle" />
      </div>
      <div class="mdc-card__subtitle " v-if="$slots['cardSubtitle']">
        <slot name="cardSubtitle" />
      </div>
    </section>
    <section class="mdc-card__supporting-text " v-if="$slots['cardSupportingText']">
      <slot name="cardSupportingText" />
    </section>
    <section class="mdc-card__actions " :class="classesActions" v-if="$slots['cardActions']">
      <slot name="cardActions" />
    </section>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: false
    },
    darkTheme: {
      type: Boolean,
      required: false
    },
    verticalActions: {
      type: Boolean,
      required: false
    },
    largeTitle: {
      type: Boolean,
      required: false
    },
    horizontal: {
      type: Boolean,
      required: false
    }
  },
  mounted() {
    if (this.$slots.actions)
      this.$slots.actions.map((n) => {
        n.elm.classList.add('mdc-card__action')
      })
  },
  computed: {
    classes() {
      return {
        'mdc-card--theme-dark': this.darkTheme
      }
    },
    classesActions() {
      return {
        'mdc-card__actions--vertical': this.verticalActions
      }
    },
    classesTitle() {
      return {
        'mdc-card__title--large': this.largeTitle
      }
    }
  }
}
</script>

<style lang="scss">
@import "@material/card/mdc-card";
</style>


