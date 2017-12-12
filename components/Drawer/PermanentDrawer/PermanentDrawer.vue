<template>
    <aside>
        <nav class="mdc-permanent-drawer">
            <div class="mdc-permanent-drawer__toolbar-spacer" :class="primaryClasses(primaryToolbarSpacer)" v-if="$slots['toolbarSpacer']">
                <slot name="toolbarSpacer" />
            </div>
            <div class="mdc-permanent-drawer__content" :class="primaryClasses(primaryContent)" v-if="$slots['default']">
              <slot />
            </div>
        </nav>
    </aside>
</template>

<script>
export default {
  props: {
    primaryToolbarSpacer: {
      type: Boolean,
      required: false
    },
    primaryContent: {
      type: Boolean,
      required: false
    }
  },
  methods: {
    primaryClasses (prop) {
      return {
        'mdc-theme--primary-bg': prop,
        'mdc-theme--text-primary-on-primary': prop
      }
    }
  }
}
</script>

<style lang="scss">
@import "@material/drawer/mdc-drawer";
</style>
