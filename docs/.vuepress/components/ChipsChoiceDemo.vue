<template>
<div>
  <ComponentSection>
  <m-chip-set choice>
    <m-chip>
      Small
    </m-chip>
    <m-chip selected>
      Medium
    </m-chip>
    <m-chip>
      Big
    </m-chip>
    </m-chip-set>
  </ComponentSection>
  <ComponentProps :radioProps="radioProps"/>
</div>
</template>

<script>
export default {
  data () {
    return {
      radioProps: [
        { prop: 'choice', value: true }
      ]
    }
  }
}
</script>
