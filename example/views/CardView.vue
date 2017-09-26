<template>
  <m-layout-grid-inner>
    <m-layout-grid-cell :spanDesktop="4">
      <m-card :largeTitle="true" :verticalActions="true" :horizontal="true">
        <m-textfield slot="cardHorizontalTitle" type="text" v-model="textfieldOne" />
        <span slot="cardHorizontalSubtitle"> Subtitle </span>
        <span slot="cardSupportingText">Example text</span>
        <m-button slot="cardActions" text="Test#1" :primary="true" />
        <m-button slot="cardActions" text="Test#2" :accent="true" />
      </m-card>
    </m-layout-grid-cell>
    <m-layout-grid-cell :spanDesktop="4">
      <m-card>
        <m-textfield slot="cardSupportingText" type="password" required minlength=4 maxlength=8 id="pw" value="" label="Password" />
        <m-textfield-helptext slot="cardSupportingText" id="validation-msg" text="Must be at least 8 characters long" :validdation-msg="true" />
      </m-card>
    </m-layout-grid-cell>
    <m-layout-grid-cell :spanDesktop="12">
      <m-textfield-multiline v-model="textfieldOne" :rows="10" :cols="50" />
    </m-layout-grid-cell>
  </m-layout-grid-inner>
</template>

<script>

export default {
  name: 'card-view',
  data() {
    return {
      textfieldOne: 'Test'
    }
  }
}
</script>

<style>
@import '~material-components-vue/dist/material-components-vue.css';
</style>