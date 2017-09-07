<template>
    <img class="mdc-card__media-item" :class="classes" :id="id" :src="src">
</template>

<script>

export default {
    props: {
         id: {
            type: String,
            required: false
        },
        src: {
            type: String,
            required: true
        },
        height: {
            type: Number,
            required: false
        }
    },
    computed: {
        classes() {
            return {
                'mdc-card__media-item--1x': (height === 1),
                'mdc-card__media-item--2x': (height === 2),
                'mdc-card__media-item--3x': (height === 3)
            }
        }
    }
}
</script>

<style lang="scss">
@import "@material/card/mdc-card";
</style>