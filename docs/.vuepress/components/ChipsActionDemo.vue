<template>
<div>
  <ComponentSection>
  <m-chip-set>
    <m-chip>
        <m-icon
          v-if="checkboxProps[0].value"
          icon="event"
          slot="leadingIcon"/>
        Add to calendar
      </m-chip>
      <m-chip>
        <m-icon
          v-if="checkboxProps[0].value"
          icon="mail"
          slot="leadingIcon"/>
        Add to email
      </m-chip>
    </m-chip-set>
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
        { prop: 'baseline', value: true }
      ],
      checkboxProps: [
        { prop: 'leadingIcon', value: true }
      ]
    }
  }
}
</script>
