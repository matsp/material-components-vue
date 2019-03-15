<template>
    <ComponentSection>
        <m-list class="demo-list" twoLine>
            <m-list-item>
                <template slot="primaryText">
                    Line item
                </template>
                <template slot="secondaryText">
                    Secondary text
                </template>
            </m-list-item>
            <m-list-item>
                <template slot="primaryText">
                    Line item
                </template>
                <template slot="secondaryText">
                    Secondary text
                </template>
            </m-list-item>
            <m-list-item>
                <template slot="primaryText">
                    Line item
                </template>
                <template slot="secondaryText">
                    Secondary text
                </template>
            </m-list-item>
        </m-list>
    </ComponentSection>
</template>

<script>
  export default {
    name: 'TwoLineListDemo'
  }
</script>

<style scoped>
    .demo-list {
        max-width: 600px;
        border: 1px solid rgba(0, 0, 0, 0.1);
        background-color: white;
    }
</style>
