<template>
  <div>
    <ComponentSection>
      <m-circular-progress
        :large="radioProps[0].value"
        :medium="radioProps[1].value"
        :small="radioProps[2].value"
        :determinate="checkboxProps[0].value"
        :progress="progress"
      />
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
        { prop: 'large', value: true },
        { prop: 'medium', value: false },
        { prop: 'small', value: false }
      ],
      checkboxProps: [
        { prop: 'determinate', value: true },
        { prop: '0.01', value: false },
        { prop: '0.02', value: false },
        { prop: '0.04', value: false },
        { prop: '0.08', value: false },
        { prop: '0.16', value: false },
        { prop: '0.32', value: false },
        { prop: '0.64', value: false }
      ]
    }
  },
  computed: {
    progress () {
      return this.checkboxProps
        .slice(1)
        .reduce((a, b) => (a += b.prop * b.value), 0)
    }
  }
}
</script>
