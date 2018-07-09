<template>
<div>
  <ComponentSection>
    <m-fab
      :mini="radioProps[2].value"
      :absoluteRight="checkboxProps[0].value"
      :exited="checkboxProps[1].value"
      :extended="radioProps[1].value">
      <m-icon
        slot="icon"
        icon="create"/>
      <span v-if="radioProps[1].value">Write something</span>
    </m-fab>
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
        { prop: 'extended', value: false},
        { prop: 'mini', value: false }
      ],
      checkboxProps: [
        { prop: 'absoluteRight', value: false },
        { prop: 'exited', value: false }
      ]
    }
  } 
}
</script>
