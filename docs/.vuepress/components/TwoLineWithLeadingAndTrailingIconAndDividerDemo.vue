<template>
    <ComponentSection>
        <m-list avatar class="demo-list" twoLine>
            <m-list-item>
                <m-icon icon="folder" slot="graphic"/>
                <template slot="primaryText">
                    Dog Photos
                </template>
                <template slot="secondaryText">
                    9 Jan 2018
                </template>
                <m-icon icon="info" slot="meta"/>
            </m-list-item>
            <m-list-item>
                <m-icon icon="folder" slot="graphic"/>
                <template slot="primaryText">
                    Cat Photos
                </template>
                <template slot="secondaryText">
                    22 Dec 2017
                </template>
                <m-icon icon="info" slot="meta"/>
            </m-list-item>
            <m-list-divider/>
            <m-list-item>
                <m-icon icon="folder" slot="graphic"/>
                <template slot="primaryText">
                    Potatoes
                </template>
                <template slot="secondaryText">
                    30 Noc 2017
                </template>
                <m-icon icon="info" slot="meta"/>
            </m-list-item>
            <m-list-item>
                <m-icon icon="folder" slot="graphic"/>
                <template slot="primaryText">
                    Carrots
                </template>
                <template slot="secondaryText">
                    17 Oct 2017
                </template>
                <m-icon icon="info" slot="meta"/>
            </m-list-item>
        </m-list>
    </ComponentSection>
</template>

<script>
  export default {
    name: 'TwoLineWithLeadingAndTrailingIconAndDividerDemo'
  }
</script>

<style scoped>
    .demo-list {
        max-width: 600px;
        border: 1px solid rgba(0, 0, 0, 0.1);
        background-color: white;
    }
</style>
