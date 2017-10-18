<template>
    <a class="material-icons mdc-toolbar__icon">
        {{icon}}
    </a>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss">
@import "@material/toolbar/mdc-toolbar";
</style>