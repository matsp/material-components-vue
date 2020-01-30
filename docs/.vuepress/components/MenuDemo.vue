<template>
<div>
  <ComponentSection>
    <m-menu-anchor>
      <m-button raised @click="isMenuOpen=!isMenuOpen">open</m-button>
      <m-menu v-model="isMenuOpen" :fixed="this.checkboxProps[0].value" :default-focus-state="defaultFocusState"
              :quickOpen="this.checkboxProps[1].value" :is-hoisted="this.checkboxProps[2].value">
          <m-list>
          <li>
              <m-menu-selection-group>
              <m-list-item>
                 <m-icon slot="graphic" icon="refresh"></m-icon>
                  <template slot="text">Refresh</template>
              </m-list-item>
              <m-list-item>
                 <m-icon slot="graphic" icon="favorite"></m-icon>
                  <template slot="text">Favorite</template>
              </m-list-item>
              </m-menu-selection-group>
          </li>
          <m-list-divider></m-list-divider>
              <m-list-item><template slot="text">Add space before paragraph</template></m-list-item>
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
        { prop: 'defaultFocusState: NONE', value: false },
        { prop: 'defaultFocusState: LIST_ROOT', value: true },
        { prop: 'defaultFocusState: FIRST_ITEM', value: false },
        { prop: 'defaultFocusState: LAST_ITEM', value: false }
      ],
      checkboxProps: [
        { prop: 'fixed', value: false },
        { prop: 'quickOpen', value: false },
        { prop: 'isHoisted', value: false }
      ]
    }
  },
  computed: {
    defaultFocusState () {
      for (let i in this.radioProps) {
        if (this.radioProps[i].value) {
          return this.radioProps[i].prop.substr(19)
        }
      }
    }
  }
}
</script>
