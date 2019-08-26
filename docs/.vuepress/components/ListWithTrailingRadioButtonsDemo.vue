<template>
    <ComponentSection>
        <m-list class="demo-list" role="radiogroup" v-model="selectedIndex">
            <m-list-item aria-checked="false" role="radio">
                <m-radio id="demo-list-radio-item-1"
                         name="demo-list-radio-item-group"
                         slot="meta" value="1"/>
                <label for="demo-list-radio-item-1">Dog Photos</label>
            </m-list-item>
            <m-list-item aria-checked="true" role="radio">
                <m-radio checked
                         id="demo-list-radio-item-2"
                         name="demo-list-radio-item-group" slot="meta" value="2"/>
                <label for="demo-list-radio-item-2">Cat Photos</label>
            </m-list-item>
            <m-list-divider/>
            <m-list-item aria-checked="false" role="radio">
                <m-radio id="demo-list-radio-item-3"
                         name="demo-list-radio-item-group"
                         slot="meta" value="3"/>
                <label for="demo-list-radio-item-3">Potatoes</label>
            </m-list-item>
            <m-list-item aria-checked="false" role="radio">
                <m-radio id="demo-list-radio-item-4"
                         name="demo-list-radio-item-group"
                         slot="meta" value="4"/>
                <label for="demo-list-radio-item-4">Carrots</label>
            </m-list-item>
        </m-list>
    </ComponentSection>
</template>

<script>
  export default {
    name: 'ListWithTrailingRadioButtonsDemo',
    data () {
      return { selectedIndex: 1 }
    }
  }
</script>

<style scoped>
    .demo-list {
        max-width: 600px;
        border: 1px solid rgba(0, 0, 0, 0.1);
        background-color: white;
    }
</style>
