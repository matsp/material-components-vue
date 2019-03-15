<template>
    <div
            class="mdc-drawer__header"
            v-if="$slots['default'] || title || subTitle"
    >
        <h3
                class="mdc-drawer__title"
                v-if="title"
        >
            {{ title }}
        </h3>
        <h6
                class="mdc-drawer__subtitle"
                v-if="subTitle"
        >
            {{ subTitle }}
        </h6>
        <slot/>
    </div>
</template>

<script>
  import { baseComponentMixin, themeClassMixin } from '../base'

  export default {
    mixins: [baseComponentMixin, themeClassMixin],
    props: {
      title: {
        type: String
      },
      subTitle: {
        type: String
      }
    }
}
</script>
