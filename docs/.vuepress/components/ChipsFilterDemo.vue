<template>
<div>
  <ComponentSection>
  <m-chip-set filter>
    <m-chip>
        <m-icon
          v-if="checkboxProps[0].value"
          icon="location_city"
          slot="leadingIcon"/>
        Vienna
        <m-icon
          v-if="checkboxProps[1].value"
          icon="cancel"
          slot="trailingIcon"/>
      </m-chip>
      <m-chip>
        <m-icon
          v-if="checkboxProps[0].value"
          icon="mail"
          slot="leadingIcon"/>
        Bar
        <m-icon
          v-if="checkboxProps[1].value"
          icon="cancel"
          slot="trailingIcon"/>
      </m-chip>
      <m-chip>
        <m-icon
          v-if="checkboxProps[0].value"
          icon="favorite"
          slot="leadingIcon"/>
        Favorites
        <m-icon
          v-if="checkboxProps[1].value"
          icon="cancel"
          slot="trailingIcon"/>
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
        { prop: 'filter', value: true }
      ],
      checkboxProps: [
        { prop: 'leadingIcon', value: true, disabled: true },
        { prop: 'trailingIcon', value: true, disabled: true }
      ]
    }
  }
}
</script>
