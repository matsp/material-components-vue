<template>
<div>
  <ComponentSection>
  <m-card>
    <m-card-media
      class="card-media card-media-content"
      :square="radioProps[0].value"
      :sixteenNine="radioProps[1].value">
    </m-card-media>
    <section class="card-section">
    <m-typo-headline :level="6">
      Cats
    </m-typo-headline>
    <m-typo-body :level="1">
      We all love them!
    </m-typo-body>
    </section>
    <m-button
      slot="actionButtons">
      action
    </m-button>
  </m-card>
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
        { prop: 'square', value: false },
        { prop: 'sixteenNine', value: true }
      ],
      checkboxProps: []
    }
  } 
}
</script>

<style scoped>
.card-section {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
  padding: 8px 16px;
  width: 300px;
  /* height: 100px; */
}

.card-media {
  background-image: url("/material-components-vue/assets/images/cat_169.jpg");
}

.card-media-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
</style>
