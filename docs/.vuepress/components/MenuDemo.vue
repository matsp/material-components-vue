<template>
<div>
  <ComponentSection>
    <m-menu-anchor>
      <m-button raised @click="isMenuOpen=!isMenuOpen">open</m-button>
      <m-menu v-model="isMenuOpen">
          <m-list>
              <m-list-item role="menuitem">
                 <m-icon slot="graphic" icon="refresh"></m-icon>
                  <template slot="text">Refresh</template>
              </m-list-item>
              <m-list-divider></m-list-divider>
              <m-list-item role="menuitem">
                 <m-icon slot="graphic" icon="favorite"></m-icon>
                  <template slot="text">Favorite</template>
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
