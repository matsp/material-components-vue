<template>
<div>
  <ComponentSection>
  <m-chip-set :choice="radioProps[1].value" :filter="radioProps[2].value" v-model="selectedChipIds">
    <m-chip :shouldRemoveOnTrailingIconClick="checkboxProps[2].value" v-model="selected[0]" v-if="ifs[0]" @removal="removeFirst">
        <m-icon
          v-if="checkboxProps[0].value"
          icon="event"
          slot="leadingIcon"/>
        Add to calendar
      <m-icon
              v-if="checkboxProps[1].value"
              icon="cancel"
              slot="trailingIcon"/>
      </m-chip>
      <m-chip :shouldRemoveOnTrailingIconClick="checkboxProps[2].value" v-model="selected[1]" v-if="ifs[1]" @removal="removeSecond">
        <m-icon
          v-if="checkboxProps[0].value"
          icon="mail"
          slot="leadingIcon"/>
        Add to email
        <m-icon
                v-if="checkboxProps[1].value"
                icon="cancel"
                slot="trailingIcon"/>
      </m-chip>
    <m-chip :shouldRemoveOnTrailingIconClick="checkboxProps[2].value" v-model="selected[1]" v-if="checkboxProps[3].value" @removal="removeThird">
      <m-icon
              v-if="checkboxProps[0].value"
              icon="phone"
              slot="leadingIcon"/>
      Add to phone
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
        { prop: 'baseline', value: true },
        { prop: 'choice', value: false },
        { prop: 'filter', value: false }
      ],
      checkboxProps: [
        { prop: 'leadingIcon', value: true },
        { prop: 'trailingIcon', value: true },
        { prop: 'shouldRemoveOnTrailingIconClick', value: false },
        { prop: 'additional chip', value: false }
      ],
      selected: [false, false],
      selectedChipIds: [],
      ifs: {
        '0': true,
        '1': true
      } // TODO: why array doesn't work as expected here
    }
  },
  methods: {
    removeFirst () {
      this.ifs[0] = false
    },
    removeSecond () {
      this.ifs[1] = false
    },
    removeThird () {
      this.checkboxProps[3].value = false
    }
  }
}
</script>
