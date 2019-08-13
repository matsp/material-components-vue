<template>
    <div>
        <ComponentSection>
            <m-menu-anchor>
                <m-button @click="open = !open" id="menu-surface-button" raised>Open Menu Surface</m-button>
                <m-menu-surface :anchor-corner="anchorCorner" :fixed="this.checkboxProps[0].value"
                                :quickOpen="this.checkboxProps[1].value" v-model="open" :is-hoisted="this.checkboxProps[2].value">
                    <div class="demo">
                        Menu Surface
                    </div>
                </m-menu-surface>
            </m-menu-anchor>
        </ComponentSection>
        <ComponentProps
                :checkboxProps="checkboxProps"
                :radioProps="radioProps"/>
    </div>
</template>

<script>
  export default {
    name: 'MenuSurfaceDemo',
    data () {
      return {
        open: false,
        radioProps: [
          { prop: 'anchorCorner: TOP_LEFT', value: true },
          { prop: 'anchorCorner: TOP_RIGHT', value: false },
          { prop: 'anchorCorner: BOTTOM_LEFT', value: false },
          { prop: 'anchorCorner: BOTTOM_RIGHT', value: false },
          { prop: 'anchorCorner: TOP_START', value: false },
          { prop: 'anchorCorner: TOP_END', value: false },
          { prop: 'anchorCorner: BOTTOM_START', value: false },
          { prop: 'anchorCorner: BOTTOM_END', value: false }
        ],
        checkboxProps: [
          { prop: 'fixed', value: false },
          { prop: 'quickOpen', value: false },
          { prop: 'isHoisted', value: false }
        ]
      }
    },
    computed: {
      anchorCorner () {
        for (let i in this.radioProps) {
          if (this.radioProps[i].value) {
            return this.radioProps[i].prop.substr(14)
          }
        }
      }
    }
  }
</script>

<style scoped>
    .demo {
        width: 100px;
        height: 100px;
    }
</style>
