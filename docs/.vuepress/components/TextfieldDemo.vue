<template>
<div>
  <ComponentSection>
    <m-textfield 
      :id="'textfield' + '-' + _uid"
      :disabled="checkboxProps[0].value"
      :upgraded="checkboxProps[1].value"
      :fullWidth="radioProps[1].value"
      :box="radioProps[2].value"
      :outlined="radioProps[3].value"
      :dense="radioProps[4].value"
      :focused="checkboxProps[2].value"
      :textarea="radioProps[5].value">
      <m-floating-label
        :for="'textfield' + '-' + _uid">Label</m-floating-label>
      <m-notched-outline v-if="radioProps[3].value"/>
      <m-line-ripple slot="bottomLine"/>
    </m-textfield>
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
        { prop: 'baseline', value: true},
        { prop: 'fullWidth', value: false },
        { prop: 'box', value: false },
        { prop: 'outlined', value: false },
        { prop: 'dense', value: false },
        { prop: 'textarea', value: false }
      ],
      checkboxProps: [
        { prop: 'disabled', value: false },
        { prop: 'upgraded', value: false },
        { prop: 'focused', value: false }
      ]
    }
  } 
}
</script>
