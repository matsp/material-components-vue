<template>
  <div>
    <ComponentSection>
      <m-chip-set
        :choice="radioProps[1].value"
        :filter="radioProps[2].value"
      >
        <m-chip
          v-if="ifs[0]"
          v-model="selected[0]"
          :should-remove-on-trailing-icon-click="checkboxProps[2].value"
          @removal="removeFirst"
        >
          <m-icon
            v-if="checkboxProps[0].value"
            slot="leadingIcon"
            icon="event"
          />
          Add to calendar
          <m-icon
            v-if="checkboxProps[1].value"
            slot="trailingIcon"
            icon="cancel"
          />
        </m-chip>
        <m-chip
          v-if="ifs[1]"
          v-model="selected[1]"
          :should-remove-on-trailing-icon-click="checkboxProps[2].value"
          @removal="removeSecond"
        >
          <m-icon
            v-if="checkboxProps[0].value"
            slot="leadingIcon"
            icon="mail"
          />
          Add to email
          <m-icon
            v-if="checkboxProps[1].value"
            slot="trailingIcon"
            icon="cancel"
          />
        </m-chip>
        <m-chip
          v-if="checkboxProps[3].value"
          v-model="selected[2]"
          :should-remove-on-trailing-icon-click="checkboxProps[2].value"
          @removal="removeThird"
        >
          <m-icon
            v-if="checkboxProps[0].value"
            slot="leadingIcon"
            icon="phone"
          />
          Add to phone
          <m-icon
            v-if="checkboxProps[1].value"
            slot="trailingIcon"
            icon="cancel"
          />
        </m-chip>
      </m-chip-set>
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
      selected: [false, false, false],
      selectedChipIds: [],
      ifs: {
        0: true,
        1: true
      }
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
