<template>
  <div class="mdc-card">
    <section class="mdc-card__primary">
      <section class="mdc-card__media" v-if="$slots['media']">
        <slot name="media" />
      </section>
      <div class="mdc-card__title mdc-card__title--large" v-if="$slots['title']">
        <slot name="title" />
      </div>
      <div class="mdc-card__subtitle" v-if="$slots['subtitle']">
        <slot name="subtitle" />
      </div>
    </section>
    <section class="mdc-card__supporting-text" v-if="$slots['supporting-text']">
      <slot name="supporting-text" />
    </section>
    <section class="mdc-card__actions" v-if="$slots['actions']">
      <slot name="actions" />
    </section>
  </div>
</template>

<script>

export default {
  mounted() {
    if (this.$slots.actions)
      this.$slots.actions.map((n) => {
        n.elm.classList.add('mdc-card__action')
      })
  }
}
</script>

<style lang="scss">
@import "@material/card/mdc-card";
</style>


