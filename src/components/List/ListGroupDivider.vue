<template>
    <hr class="mdc-list-divider" :id="id">
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            required: false
        }
    }
}
</script>

<style lang="scss">
@import "@material/list/mdc-list";
</style>


