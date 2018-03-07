<template>
  <m-layout-grid-inner>
    <m-layout-grid-cell :span="12">
      <m-typo-display :level="1">Textfield</m-typo-display>
      <m-typo-body :level="2">
        <a href="https://github.com/matsp/material-components-vue/blob/master/components/textfield">
          https://github.com/matsp/material-components-vue/blob/master/components/textfield
        </a>
      </m-typo-body>
    </m-layout-grid-cell>
    <m-layout-grid-cell :span="2">
      <m-text-field id="textfield1">
        <m-floating-label for="textfield1">Textfield</m-floating-label>
        <m-line-ripple slot="bottomLine"/>
      </m-text-field>
    </m-layout-grid-cell>
    <m-layout-grid-cell :span="2">
      <m-text-field type="password" id="textfield2" required minlength="8" aria-controls="pw-validation">
        <m-floating-label for="textfield2">Password</m-floating-label>
        <m-line-ripple slot="bottomLine"/>
      </m-text-field>
      <m-text-field-helptext id="pw-validation">
        Password must be at least 8 characters long.
      </m-text-field-helptext>
    </m-layout-grid-cell>
    <m-layout-grid-cell :span="8" />
    <m-layout-grid-cell :span="2">
      <m-text-field
        box
        id="textfield3">
        <m-floating-label for="textfield3">Textfield</m-floating-label>
      </m-text-field>
    </m-layout-grid-cell>
    <m-layout-grid-cell :span="2">
      <m-text-field
        box
        id="textfield4">
        <m-icon
          slot="leadingIcon"
          icon="person"/>
        <m-floating-label for="textfield4">Textfield</m-floating-label>
      </m-text-field>
    </m-layout-grid-cell>
    <m-layout-grid-cell :span="2">
      <m-text-field
        box
        id="textfield5">
        <m-icon
          slot="trailingIcon"
          icon="person"/>
        <m-floating-label for="textfield5">Textfield</m-floating-label>
      </m-text-field>
    </m-layout-grid-cell>
    <m-layout-grid-cell :span="12">
      <m-text-field placeholder="Fullwidth" full-width>
        <m-line-ripple slot="bottomLine"/>
      </m-text-field>
    </m-layout-grid-cell>
    <m-layout-grid-cell :span="12">
      <m-text-field
        textarea
        id="textfield6">
        <m-floating-label for ="textfield6">Textarea</m-floating-label>
      </m-text-field>
    </m-layout-grid-cell>
    <m-layout-grid-cell :span="12">
      <m-text-field 
        outlined
        id="textfield7">
        <m-floating-label for="textfield7">Outlined</m-floating-label>
      </m-text-field>
    </m-layout-grid-cell>
  </m-layout-grid-inner>
</template>

<script>
import Vue from 'vue'
import FloatingLabel from '../../dist/floating-label'
import LineRipple from '../../dist/line-ripple'
import Icon from '../../dist/icon'
import Textfield from '../../dist/textfield'

Vue.use(FloatingLabel)
Vue.use(LineRipple)
Vue.use(Icon)
Vue.use(Textfield)

export default {

}
</script>

<style lang="scss">
@import "../../dist/floating-label/styles";
@import "../../dist/line-ripple/styles";
@import "../../dist/textfield/styles";
</style>
