<template>
<div>
  <ComponentSection>
  <m-chip-set
    input>
    <m-chip
      v-if="!edit"
      @click.native="toggleEdit">
        <m-icon
          v-if="checkboxProps[0].value"
          icon="location_city"
          slot="leadingIcon"/>
          {{city}}
      </m-chip>
    </m-chip-set>
    <m-textfield
      id="input-chip"
      v-if="edit"
      v-model="city"
      @keyup.enter.native="toggleEdit"/>
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
  },
  methods: {
    toggleEdit () {
      this.edit = !this.edit
      if (this.edit) {
        this.$nextTick().then(this.selectText).catch(e => console.log(e))
      }
    },
    selectText () {
      let inputs = document.getElementById('input-chip').getElementsByTagName('input')
      inputs[0].select()
    }
  }
}
</script>
