<template>
    <div
            class="mdc-drawer__content"
            v-if="$slots['default']"
    >
    <slot />
    </div>
</template>

<script>
  import { baseComponentMixin, themeClassMixin } from '../base'

  export default {
  mixins: [baseComponentMixin, themeClassMixin]
}
</script>
