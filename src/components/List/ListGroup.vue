<template>
    <div class="mdc-list-group" :id="id">
        <slot />
    </div>
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


