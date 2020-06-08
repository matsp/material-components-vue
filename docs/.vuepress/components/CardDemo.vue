<template>
  <div>
    <ComponentSection>
      <m-card
        :outlined="radioProps[1].value"
      >
        <div
          class="mdc-card__primary-action card-section"
          tabindex="0"
        >
          <m-typo-headline :level="6">
            Title
          </m-typo-headline>
          <m-typo-body :level="1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </m-typo-body>
        </div>
        <m-button
          v-if="checkboxProps[0].value"
          slot="fullBleedAction"
        >
          full bleed
        </m-button>
        <template
          v-if="checkboxProps[1].value"
          slot="actions"
        >
          <m-button>
            action
          </m-button>
          <m-button>
            action
          </m-button>
        </template>
        <template
          v-if="checkboxProps[2].value"
          slot="actionButtons"
        >
          <m-button>
            action
          </m-button>
          <m-button>
            action
          </m-button>
        </template>
      </m-card>
    </ComponentSection>
    <ComponentProps
      :radio-props="radioProps"
      :checkbox-props="checkboxProps"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      radioProps: [
        { prop: 'baseline', value: true },
        { prop: 'outlined', value: false }
      ],
      checkboxProps: [
        { prop: 'fullBleedAction', value: false },
        { prop: 'actions', value: false },
        { prop: 'actionButtons', value: false }
      ]
    }
  }
}
</script>

<style scoped>
.card-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 8px 16px;
  width: 300px;
  /* height: 200px; */
}
</style>
