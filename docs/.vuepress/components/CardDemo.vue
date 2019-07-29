<template>
<div>
  <ComponentSection>
  <m-card
    :outlined="radioProps[1].value"
    :fullBleedAction="checkboxProps[0].value"
  >
    <m-card-primary-action class="card-section">
    <m-typo-headline :level="6">
      Title
    </m-typo-headline>
    <m-typo-body :level="1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </m-typo-body>
    </m-card-primary-action>
    <m-button slot="actions" v-if="checkboxProps[0].value">
      full bleed
    </m-button>
    <template slot="actionButtons">
      <m-button>
        action
      </m-button>
      <m-button>
        action
      </m-button>
    </template>
    <template slot="actionIcons">
      <m-icon-button icon="share">
      </m-icon-button>
      <m-icon-button icon="more_vert">
      </m-icon-button>
    </template>
  </m-card>
  </ComponentSection>
  <ComponentProps
    :radioProps="radioProps"
    :checkboxProps="checkboxProps"/>
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
        { prop: 'fullBleedAction', value: false }
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
