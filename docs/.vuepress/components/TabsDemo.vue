<template>
  <div>
    <ComponentSection>
      <m-tab-bar
        :activate-tab="0"
        :focus-on-activate="checkboxProps[0].value"
        :use-automatic-activation="checkboxProps[1].value"
        :align="align"
      >
        <m-tab
          :min-width="checkboxProps[4].value"
          :spanning-only-content="checkboxProps[2].value"
          :stacked="checkboxProps[3].value"
          :fade="checkboxProps[5].value"
          v-model="active[0]"
        >
          <m-icon icon="access_time" slot="icon" />Recents
        </m-tab>
        <m-tab
          :min-width="checkboxProps[4].value"
          :spanning-only-content="checkboxProps[2].value"
          :stacked="checkboxProps[3].value"
          :fade="checkboxProps[5].value"
          v-model="active[1]"
        >
          <m-icon icon="near_me" slot="icon" />Nearby
        </m-tab>
        <m-tab
          :min-width="checkboxProps[4].value"
          :spanning-only-content="checkboxProps[2].value"
          :stacked="checkboxProps[3].value"
          :fade="checkboxProps[5].value"
          v-model="active[2]"
        >
          <m-icon icon="favorite" slot="icon" />Favorite
          <m-tab-indicator slot="indicator" :fade="checkboxProps[5].value" icon="favorite"></m-tab-indicator>
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
      radioProps: [
        { prop: "align-none", value: true},
        { prop: "align-start", value: false},
        { prop: "align-center", value: false},
        { prop: "align-end", value: false},
      ],
      checkboxProps: [
        { prop: "focusOnActivate", value: true },
        { prop: "useAutomaticActivation", value: true },
        { prop: "spanningOnlyContent", value: false },
        { prop: "stacked", value: false },
        { prop: "minWidth", value: false },
        { prop: "fade", value: false }
      ],
      active: [true, false, false]
    }
  },
  computed: {
    align () {
      let _align = this.radioProps.filter(i => i.value)[0].prop.substring(6)
      return _align === 'none' ? '' : _align
    }
  }
}
</script>

<style scoped>
</style>
