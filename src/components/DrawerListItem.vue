<template>
    <li class="mdc-list-item" @click="openRoute(item.route)">
        <i class="mdc-list-item__start-detail material-icons" aria-hidden="true">{{item.icon}}</i>
        {{item.title}}
    </li>
</template>

<script>
export default {
    props: ['item'],
    methods: {
        openRoute(route) {
            this.$emit('toggleDrawer')
            this.$router.push(route)
        }
    }
}
</script>

<style lang="scss">
@import "@material/list/mdc-list";
</style>
