<template>
<div>
  <ComponentSection>
    <m-icon-button v-model="toggleData" :ripple="checkboxProps[0].value" :unbounded="checkboxProps[1].value" :class="classes">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" v-if="radioProps[0].value">
        <path fill="none" d="M0 0h24v24H0z"/>
        <path d="M23 12c0-6.07-4.93-11-11-11S1 5.93 1 12s4.93 11 11 11 11-4.93 11-11zM5 17.64C3.75 16.1 3 14.14 3 12c0-2.13.76-4.08 2-5.63v11.27zM17.64 5H6.36C7.9 3.75 9.86 3 12 3s4.1.75 5.64 2zM12 14.53L8.24 7h7.53L12 14.53zM17 9v8h-4l4-8zm-6 8H7V9l4 8zm6.64 2c-1.55 1.25-3.51 2-5.64 2s-4.1-.75-5.64-2h11.28zM21 12c0 2.14-.75 4.1-2 5.64V6.37c1.24 1.55 2 3.5 2 5.63z"/>
      </svg>
      <svg slot="toggleOn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" v-if="radioProps[1].value">
        <path fill="none" d="M0 0h24v24H0z"/>
        <path d="M23 12c0-6.07-4.93-11-11-11S1 5.93 1 12s4.93 11 11 11 11-4.93 11-11zM5 17.64C3.75 16.1 3 14.14 3 12c0-2.13.76-4.08 2-5.63v11.27zM17.64 5H6.36C7.9 3.75 9.86 3 12 3s4.1.75 5.64 2zM12 14.53L8.24 7h7.53L12 14.53zM17 9v8h-4l4-8zm-6 8H7V9l4 8zm6.64 2c-1.55 1.25-3.51 2-5.64 2s-4.1-.75-5.64-2h11.28zM21 12c0 2.14-.75 4.1-2 5.64V6.37c1.24 1.55 2 3.5 2 5.63z"/>
      </svg>
      <svg slot="toggleOff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" v-if="radioProps[1].value">
        <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
      </svg>
      <template v-if="radioProps[2].value">favorite</template>
      <m-icon slot="toggleOn" icon="favorite" v-if="radioProps[3].value"></m-icon>
      <m-icon slot="toggleOff" icon="favorite_border" v-if="radioProps[3].value"></m-icon>
    </m-icon-button>

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
      toggleData: true,
      radioProps: [
        { prop: 'basic (svg)', value: false },
        { prop: 'toggle (svg)', value: true },
        { prop: 'basic (material icons)', value: false },
        { prop: 'toggle (material icons)', value: false }
      ],
      checkboxProps: [
        { prop: 'ripple', value: true },
        { prop: 'unbounded', value: true }
      ]
    }
  },
  computed: {
    classes () {
      return {
        'material-icons': this.radioProps[2].value
      }
    }
  }
}
</script>