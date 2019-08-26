<template>
    <ComponentSection>
        <m-list aria-label="List with checkbox items" class="demo-list" role="group" v-model="selectedIndex">
            <m-list-item aria-checked="false" role="checkbox">
                <m-checkbox id="demo-list-checkbox-item-1"
                            name="demo-list-checkbox-item-group"
                            slot="meta" value="1"/>
                <label for="demo-list-checkbox-item-1">Dog Photos</label>
            </m-list-item>
            <m-list-item aria-checked="true" role="checkbox" tabindex="0">
                <m-checkbox checked
                            id="demo-list-checkbox-item-2"
                            name="demo-list-checkbox-item-group" slot="meta" value="2"/>
                <label for="demo-list-checkbox-item-2">Cat Photos</label>
            </m-list-item>
            <m-list-divider/>
            <m-list-item aria-checked="false" role="checkbox">
                <m-checkbox id="demo-list-checkbox-item-3"
                            name="demo-list-checkbox-item-group"
                            slot="meta" value="3"/>
                <label for="demo-list-checkbox-item-3">Potatoes</label>
            </m-list-item>
            <m-list-item aria-checked="false" role="checkbox">
                <m-checkbox id="demo-list-checkbox-item-4"
                            name="demo-list-checkbox-item-group"
                            slot="meta" value="4"/>
                <label for="demo-list-checkbox-item-4">Carrots</label>
            </m-list-item>
        </m-list>
    </ComponentSection>
</template>

<script>
  export default {
    name: 'ListWithTrailingCheckboxDemo',
    data () {
      return { selectedIndex: [1] }
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
