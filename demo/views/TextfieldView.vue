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
            <m-textfield v-model="text" bottomLine>
                Textfield
            </m-textfield>
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="2">
            <m-textfield bottomLine required minlength=8 aria-controls="pw-validation">
                Password
            </m-textfield>
            <m-textfield-helptext id="pw-validation">
                Password must be at least 8 characters long.
            </m-textfield-helptext>
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="2">
            <m-textfield v-model="text" box>
                Textfield
            </m-textfield>
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="2">
            <m-textfield v-model="text" leadingIcon="person" box>
                Textfield
            </m-textfield>
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="2">
            <m-textfield v-model="text" trailingIcon="person" box>
                Textfield
            </m-textfield>
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="12">
            <m-textfield v-model="text" placeholder="Textfield" fullWidth />
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="12">
            <m-textfield-multiline v-model="text">
                Textfield
            </m-textfield-multiline>
        </m-layout-grid-cell>
    </m-layout-grid-inner>
</template>

<script>
export default {
  data() {
      return {
          text: ''
      }
  }
}
</script>
