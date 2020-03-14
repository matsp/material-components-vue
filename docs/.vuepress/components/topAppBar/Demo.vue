<template>
  <div>
    <m-top-app-bar
      :dense="radioProps[4].value"
      :short="radioProps[1].value || radioProps[2].value"
      :collapsed="radioProps[2].value"
      :prominent="radioProps[3].value"
      :fixed="checkboxProps[0].value"
      :title="title"
    >
      <m-icon-button icon="menu" slot="navigation" v-if="checkboxProps[1].value"/>
      <template slot="actions" v-if="checkboxProps[2].value">
        <m-icon-button icon="print" />
      </template>
    </m-top-app-bar>
    <m-top-app-bar-fixed-adjust dense>
      <div>
        <ComponentProps
          :radioProps="radioProps"
          :checkboxProps="checkboxProps"
        />
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </m-top-app-bar-fixed-adjust>
  </div>
</template>

<script>
export default {
  name: "Demo",
  data() {
    return {
      radioProps: [
        { prop: "standard", value: true },
        { prop: "short", value: false },
        { prop: "short collapsed", value: false },
        { prop: "prominent", value: false },
        { prop: "dense", value: false }
      ],
      checkboxProps: [{ prop: "fixed", value: false }, {prop:"has navigation button", value: true}, {prop: 'has action', value: true}]
    };
  },
  computed: {
    title() {
      return this.radioProps.find(({ value }) => value).prop;
    }
  }
};
</script>

<style scoped></style>
