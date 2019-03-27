<template>
<div>
  <ComponentSection>
  <m-chip-set
    input>
    <m-chip
      v-if="!edit"
      @click.native="edit=!edit">
        <m-icon
          v-if="checkboxProps[0].value"
          icon="location_city"
          slot="leadingIcon"/>
          {{city}}
      </m-chip>
    </m-chip-set>
    <m-text-field
      id="input-chip"
      v-if="edit"
      v-model="city"
      @keyup.enter.native="edit=!edit"/>
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
        { prop: 'input', value: true }
      ],
      checkboxProps: [
        { prop: 'leadingIcon', value: true }
      ],
      city: 'Salzburg',
      edit: false
    }
  }
}
</script>
