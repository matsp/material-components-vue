<template>
    <img class="mdc-card__media-item" :class="classes" />
</template>

<script>

export default {
    props: {
        height: {
            type: Number,
            validator: value => ( value >=1 && value <=3 ),
            required: false
        }
    },
    computed: {
        classes() {
            let calc = {}
            calc['mdc-card__media-item--'+this.height+'x'] = true
            return calc
        }
    }
}
</script>

<style lang="scss">
@import "@material/card/mdc-card";
</style>