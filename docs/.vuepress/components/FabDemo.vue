<template>
  <div>
    <ComponentSection>
      <m-fab
        :mini="radioProps[4].value"
        :exited="checkboxProps[0].value"
        :ripple="checkboxProps[1].value"
      >
        <m-icon
          v-if="
            radioProps[1].value || radioProps[0].value || radioProps[4].value
          "
          slot="icon"
          icon="add"
        />
        {{ text }}
        <m-icon
          v-if="radioProps[2].value"
          slot="trailingIcon"
          icon="add"
        />
      </m-fab>
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
        { prop: 'baseline', value: false },
        { prop: 'extended', value: false },
        { prop: 'extended (Text label followed by icon)', value: true },
        { prop: 'extended (without Icon)', value: false },
        { prop: 'mini', value: false }
      ],
      checkboxProps: [
        { prop: 'exited', value: false },
        { prop: 'ripple', value: true }
      ]
    }
  },
  computed: {
    text () {
      return this.extended ? 'create' : ''
    },
    extended () {
      return (
        this.radioProps[1].value ||
        this.radioProps[2].value ||
        this.radioProps[3].value
      )
    }
  }
}
</script>
