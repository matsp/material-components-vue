<template>
    <div>
        <ComponentSection>
            <m-image-list :column="radioProps.findIndex(i => i.value)" :masonry="checkboxProps[1].value"
                          :textProtection="checkboxProps[0].value" class="width-adjust">
                <m-image-list-item>
                    <img :src="$withBase('/assets/images/cat.jpg')" slot="image">
                    Cat
                </m-image-list-item>
                <m-image-list-item>
                    <img :src="$withBase('/assets/images/cat.jpg')" slot="image">
                    Cat
                </m-image-list-item>
                <m-image-list-item>
                    <img :src="$withBase('/assets/images/cat.jpg')" slot="image">
                    Cat
                </m-image-list-item>
                <m-image-list-item>
                    <img :src="$withBase('/assets/images/cat.jpg')" slot="image">
                    Cat
                </m-image-list-item>
                <m-image-list-item>
                    <img :src="$withBase('/assets/images/cat.jpg')" slot="image">
                    Cat
                </m-image-list-item>
                <m-image-list-item>
                    <img :src="$withBase('/assets/images/cat.jpg')" slot="image">
                    Cat
                </m-image-list-item>
                <m-image-list-item>
                    <img :src="$withBase('/assets/images/cat.jpg')" slot="image">
                    Cat
                </m-image-list-item>
            </m-image-list>
        </ComponentSection>
        <ComponentProps
                :checkboxProps="checkboxProps"
                :radioProps="radioProps"/>
    </div>
</template>

<script>
  export default {
    name: 'ImageListDemo',
    data () {
      return {
        radioProps: [
          { prop: 'no column', value: true },
          { prop: 'column-1', value: false },
          { prop: 'column-2', value: false },
          { prop: 'column-3', value: false },
          { prop: 'column-4', value: false },
          { prop: 'column-5', value: false },
          { prop: 'column-6', value: false },
          { prop: 'column-7', value: false },
          { prop: 'column-8', value: false },
          { prop: 'column-9', value: false },
          { prop: 'column-10', value: false },
          { prop: 'column-11', value: false },
          { prop: 'column-12', value: false },
        ],
        checkboxProps: [
          { prop: 'textProtection', value: false },
          { prop: 'masonry', value: false },
        ]
      }
    }
  }
</script>

<style scoped>
    .width-adjust {
        width: 100%;
    }
</style>
