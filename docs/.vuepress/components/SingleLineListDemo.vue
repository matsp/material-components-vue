<template>
    <ComponentSection>
        <m-list class="demo-list">
            <m-list-item>Line item</m-list-item>
            <m-list-item>Line item</m-list-item>
            <m-list-item>Line item</m-list-item>
        </m-list>
    </ComponentSection>
</template>

<script>
  export default {
    name: 'SingleLineListDemo'
  }
</script>

<style scoped>
    .demo-list {
        max-width: 600px;
        border: 1px solid rgba(0, 0, 0, 0.1);
        background-color: white;
    }
</style>
