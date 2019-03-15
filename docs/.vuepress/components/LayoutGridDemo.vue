<template>
    <div>
        <ComponentSection>
            <m-layout-grid :align="align" style="width: 80%;  background: rgba(0, 0, 0, 0.2);">
                <m-layout-grid-inner>
                    <m-layout-grid-cell :span="6" class="demo-cell"/>
                    <m-layout-grid-cell :span="3" class="demo-cell"/>
                    <m-layout-grid-cell :span="2" class="demo-cell"/>
                    <m-layout-grid-cell :span="1" class="demo-cell"/>
                    <m-layout-grid-cell :span="2" class="demo-cell"/>
                    <m-layout-grid-cell :span="1" class="demo-cell"/>
                    <m-layout-grid-cell :span="9" class="demo-cell"/>
                </m-layout-grid-inner>
            </m-layout-grid>
        </ComponentSection>
        <ComponentProps
                :checkboxProps="checkboxProps"
                :radioProps="radioProps"/>
    </div>
</template>

<script>
  export default {
    name: 'LayoutGridDemo',
    data () {
      return {
        radioProps: [
          { prop: 'no grid align', value: true },
          { prop: 'grid-align-left', value: false },
          { prop: 'grid-align-right', value: false },
        ],
        checkboxProps: []
      }
    },
    computed: {
      align () {
        if (this.radioProps[1].value) return 'left'
        if (this.radioProps[2].value) return 'right'
        return ''
      }
    }
  }
</script>

<style scoped>
    .demo-cell {
        background: rgba(0, 0, 0, .2);
        height: 100px;
    }
</style>
