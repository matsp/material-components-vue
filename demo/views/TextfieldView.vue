<template>
  <m-layout-grid-inner>
    <m-layout-grid-cell :span="12">
      <m-typo-display :level="1">Textfield</m-typo-display>
      <m-typo-body :level="2">
        <a href="https://github.com/matsp/material-components-vue/blob/master/components/Textfield">
          https://github.com/matsp/material-components-vue/blob/master/components/Textfield
        </a>
      </m-typo-body>
    </m-layout-grid-cell>
    <m-layout-grid-cell :span="2">
      <m-text-field v-model="text" bottomLine>
        Textfield
      </m-text-field>
    </m-layout-grid-cell>
    <m-layout-grid-cell :span="2">
      <m-text-field v-model="pw" type="password" bottom-line required minlength="8" aria-controls="pw-validation">
        Password
      </m-text-field>
      <m-text-field-helptext id="pw-validation">
        Password must be at least 8 characters long.
      </m-text-field-helptext>
    </m-layout-grid-cell>
    <m-layout-grid-cell :span="8" />
    <m-layout-grid-cell :span="2">
      <m-text-field v-model="text" box>
        Textfield
      </m-text-field>
    </m-layout-grid-cell>
    <m-layout-grid-cell :span="2">
      <m-text-field
        v-model="text"
        box>
        <m-icon
          slot="leadingIcon"
          icon="person"/>
        Textfield
      </m-text-field>
    </m-layout-grid-cell>
    <m-layout-grid-cell :span="2">
      <m-text-field
        v-model="text"
        box>
        <m-icon
          slot="trailingIcon"
          icon="person"/>
        Textfield
      </m-text-field>
    </m-layout-grid-cell>
    <m-layout-grid-cell :span="12">
      <m-text-field v-model="text" placeholder="Fullwidth" full-width />
    </m-layout-grid-cell>
    <m-layout-grid-cell :span="12">
      <m-text-field v-model="text" textarea>
        Textarea
      </m-text-field>
    </m-layout-grid-cell>
    <m-layout-grid-cell :span="12">
      <m-text-field v-model="text" outlined>
        Outlined
      </m-text-field>
    </m-layout-grid-cell>
  </m-layout-grid-inner>
</template>

<script>
export default {
  data () {
    return {
      text: '',
      pw: ''
    }
  }
}
</script>
