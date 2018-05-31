<template>
<div>
  <ComponentSection>
    <m-fab
      :mini="checkboxProps[0].value"
      :absoluteRight="checkboxProps[1].value"
      :exited="checkboxProps[2].value">
      <m-icon icon="create"/>
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
        { prop: 'baseline', value: true}
      ],
      checkboxProps: [
        { prop: 'mini', value: false },
        { prop: 'absoluteRight', value: false },
        { prop: 'exited', value: false }
      ]
    }
  } 
}
</script>
