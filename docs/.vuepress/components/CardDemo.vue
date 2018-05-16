<template>
<div>
  <ComponentSection>
  <m-card
    :outlined="radioProps[1].value"
    :fullBleedAction="checkboxProps[0].value"
    :primaryAction="checkboxProps[1].value">
    <section class="card-section">
    <m-typo-headline :level="6">
      Title
    </m-typo-headline>
    <m-typo-body :level="1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </m-typo-body>
    </section>
    <m-button
      interactive
      slot="actionButtons">
      action
    </m-button>
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
        { prop: 'fullBleedAction', value: false },
        { prop: 'primaryAction', value: false }
      ]
    }
  } 
}
</script>

<style scoped>
.card-section {
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: flex-start;
  padding: 8px 16px;
  width: 300px;
  /* height: 200px; */
}
</style>
