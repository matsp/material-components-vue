<template>
  <section
    v-if="radioProps.length || checkboxProps.length"
    class="configSection"
  >
    <m-layout-grid>
      <m-layout-grid-inner>
        <m-layout-grid-cell :span="12">
          <m-typo-headline :level="5">
            Props
          </m-typo-headline>
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="6">
          <m-layout-grid-inner v-if="radioProps">
            <m-layout-grid-cell
              v-for="item of radioProps"
              :key="item.prop"
              :span="12"
            >
              <m-form-field>
                <m-radio
                  :id="item.prop + '-' +_uid"
                  v-model="radioPicked"
                  :value="item.prop"
                  :checked="item.value"
                  :name="_uid.toString()"
                />
                <label :for="item.prop + '-' +_uid">{{ item.prop }}</label>
              </m-form-field>
            </m-layout-grid-cell>
          </m-layout-grid-inner>
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="6">
          <m-layout-grid-inner v-if="checkboxProps">
            <m-layout-grid-cell
              v-for="item of checkboxProps"
              :key="item.prop"
              :span="12"
            >
              <m-form-field>
                <m-checkbox
                  :id="item.prop + '-' +_uid"
                  v-model="item.value"
                  :disabled="item.disabled"
                />
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
      this.radioProps.forEach(n => n.value = n.prop === this.radioPicked)
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
