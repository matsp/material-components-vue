<template>
    <m-layout-grid-inner>
         <m-layout-grid-cell :span="12">
            <m-typo-display :level="1">IconToggle</m-typo-display>
            <m-typo-body :level="2">
                <a href="https://github.com/matsp/material-components-vue/blob/master/components/IconToggle">
                    https://github.com/matsp/material-components-vue/blob/master/components/IconToggle
                </a>
            </m-typo-body>
         </m-layout-grid-cell>
        <m-layout-grid-cell :span="1">
            <m-icon-toggle v-model="iconToggle" iconOn="favorite" iconOff="favorite_border" />
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="1">
            <m-icon-toggle v-model="iconToggle" iconOn="favorite" iconOff="favorite_border" primary />
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="1">
            <m-icon-toggle v-model="iconToggle" iconOn="favorite" iconOff="favorite_border" accent />
        </m-layout-grid-cell>
         <m-layout-grid-cell :span="1">
            <m-icon-toggle v-model="cloudToggle" iconOn="cloud_done" iconOff="cloud" />
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="1">
            <m-icon-toggle v-model="cloudToggle" iconOn="cloud_done" iconOff="cloud" primary />
        </m-layout-grid-cell>
        <m-layout-grid-cell :span="1">
            <m-icon-toggle v-model="cloudToggle" iconOn="cloud_done" iconOff="cloud" accent />
        </m-layout-grid-cell>
    </m-layout-grid-inner>
</template>

<script>
export default {
  data () {
    return {
      iconToggle: false,
      cloudToggle: false
    }
  }
}
</script>
