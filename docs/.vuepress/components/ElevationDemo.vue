<template>
    <div>
        <ComponentSection>
            <div class="elevation-demo-surface" v-elevation.transition="elevation" v-if="checkboxProps[0].value"></div>
            <div class="elevation-demo-surface" v-elevation="elevation" v-else></div>
        </ComponentSection>
        <ComponentProps
                :radioProps="radioProps"
                :checkboxProps="checkboxProps"/>
    </div>
</template>

<script>
  export default {
    name: 'ElevationDemo',
    data () {
      return {
        radioProps: [],
        checkboxProps: [
          { prop: 'transition', value: true },
          { prop: 1, value: false },
          { prop: 2, value: false },
          { prop: 4, value: false },
          { prop: 8, value: false },
          { prop: 16, value: false },
        ]
      }
    },
    computed: {
      elevation () {
        let res = 0
        for (let i = 1; i < this.checkboxProps.length; i++) {
          res += this.checkboxProps[i].prop * this.checkboxProps[i].value
        }
        return res > 24 ? 24 : res
      }
    }
  }
</script>

<style scoped>
    .elevation-demo-surface {
        display: -ms-inline-flexbox;
        display: inline-flex;
        justify-content: space-around;
        min-height: 100px;
        min-width: 200px;
        margin: 15px;
        -ms-flex-align: center;
        align-items: center;
        background-color: white;
    }
</style>