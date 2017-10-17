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

