<template>
<div>
  <ComponentSection>
    <m-fab
      :mini="radioProps[4].value"
      :absoluteRight="checkboxProps[0].value"
      :exited="checkboxProps[1].value"
    :ripple="checkboxProps[2].value">
        <m-fab-icon v-if="radioProps[1].value || radioProps[0].value || radioProps[4].value" class="material-icons">add</m-fab-icon>
        <m-fab-label v-if="radioProps[1].value || radioProps[2].value || radioProps[3].value">create</m-fab-label>
        <m-fab-icon v-if="radioProps[2].value" class="material-icons">add</m-fab-icon>
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
        { prop: 'extended (Text label followed by icon)', value: false},
        { prop: 'extended (without Icon)', value: false},
        { prop: 'mini', value: false }
      ],
      checkboxProps: [
        { prop: 'absoluteRight', value: false },
        { prop: 'exited', value: false },
        { prop: 'ripple', value: true }
      ]
    }
  } 
}
</script>
