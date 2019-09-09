<template>
  <div>
    <ComponentSection>
      <m-tab-bar
        :activate-tab="0"
        :focus-on-activate="checkboxProps[0].value"
        :use-automatic-activation="checkboxProps[1].value"
      >
        <m-tab
          :min-width="checkboxProps[4].value"
          :spanning-only-content="checkboxProps[2].value"
          :stacked="checkboxProps[3].value"
          v-model="active[0]"
        >
          <m-icon icon="access_time" slot="icon" />Recents
        </m-tab>
        <m-tab
          :min-width="checkboxProps[4].value"
          :spanning-only-content="checkboxProps[2].value"
          :stacked="checkboxProps[3].value"
          v-model="active[1]"
        >
          <m-icon icon="near_me" slot="icon" />Nearby
        </m-tab>
        <m-tab
          :min-width="checkboxProps[4].value"
          :spanning-only-content="checkboxProps[2].value"
          :stacked="checkboxProps[3].value"
          v-model="active[2]"
        >
          <m-icon icon="favorite" slot="icon" />Favorite
        </m-tab>
      </m-tab-bar>
    </ComponentSection>
    <ComponentProps :checkboxProps="checkboxProps" :radioProps="radioProps" />
  </div>
</template>

<script>
export default {
  name: "TabsDemo",
  data() {
    return {
      radioProps: [],
      checkboxProps: [
        { prop: "focusOnActivate", value: true },
        { prop: "useAutomaticActivation", value: true },
        { prop: "spanningOnlyContent", value: false },
        { prop: "stacked", value: false },
        { prop: "minWidth", value: false }
      ],
      active: [true, false, false]
    }
  }
}
</script>

<style scoped>
</style>
