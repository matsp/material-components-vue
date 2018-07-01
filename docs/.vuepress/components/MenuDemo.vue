<template>
<div>
  <ComponentSection>
    <m-menu-anchor>
      <m-button raised @click="isMenuOpen=!isMenuOpen">open</m-button>
      <m-menu v-model="isMenuOpen">
          <m-list>
              <m-list-item>
                 <m-icon slot="graphic" icon="refresh"></m-icon>
                 Refresh
              </m-list-item>
              <m-list-divider></m-list-divider>
              <m-list-item>
                 <m-icon slot="graphic" icon="favorite"></m-icon>
                 Favorite
              </m-list-item>
          </m-list>
      </m-menu>
    </m-menu-anchor>
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
      isMenuOpen: false,
      radioProps: [
      ],
      checkboxProps: [
      ]
    }
  } 
}
</script>
