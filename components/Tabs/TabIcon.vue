<template>
    <i class="material-icons mdc-tab__icon" :aria-label="label" :aria-hidden="label?false:true">
        {{icon}}
    </i>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            required: false
        },
        icon: {
            type: String,
            required: true
        }
    }
}
</script>
