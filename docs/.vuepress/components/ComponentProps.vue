<template>
<section class="configSection" v-if="radioProps.length || checkboxProps.length">
  <m-layout-grid>
  <m-layout-grid-inner>
  <m-layout-grid-cell :span="12">
    <m-typo-headline :level="5">Props</m-typo-headline>
  </m-layout-grid-cell>
  <m-layout-grid-cell :span="6">
  <m-layout-grid-inner>
  <m-layout-grid-cell
    :span="12"
    v-for="item of radioProps"
    v-if="radioProps"
    :key="item.prop">
    <m-form-field>
      <m-radio
        v-model="radioPicked"
        :value="item.prop"
        :id="item.prop + '-' +_uid"
        :checked="item.value"
        :name="_uid.toString()"/>
        <label :for="item.prop + '-' +_uid">{{ item.prop }}</label>
    </m-form-field>
  </m-layout-grid-cell>
  </m-layout-grid-inner>
  </m-layout-grid-cell>
  <m-layout-grid-cell :span="6">
  <m-layout-grid-inner>
  <m-layout-grid-cell
    :span="12"
    v-for="item of checkboxProps"
    v-if="checkboxProps"
    :key="item.prop">
    <m-form-field>
      <m-checkbox
        v-model="item.value"
        :id="item.prop + '-' +_uid"
        :disabled="item.disabled"/>
        <label :for="item.prop + '-' +_uid">{{ item.prop }}</label>
    </m-form-field>
  </m-layout-grid-cell>
  </m-layout-grid-inner>
  </m-layout-grid-cell>
  </m-layout-grid-inner>
  </m-layout-grid>
</section>
</template>

<script>
export default {
  props: {
    radioProps: {
      type: Array
    },
    checkboxProps: {
      type: Array
    }
  },
  data () {
    return {
      radioPicked: ''
    }
  },
  watch: {
    radioPicked () {
      this.radioProps.map(n => n.prop === this.radioPicked ? n.value = true : n.value = false)
    }
  }
}
</script>

<style>
.configSection {
  margin: 24px;
  padding: 24px;
}
</style>
