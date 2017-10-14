<template>
    <i class="mdc-grid-tile__icon material-icons">
        {{icon}}
    </i>
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