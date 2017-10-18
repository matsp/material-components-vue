<template>
    <p class="mdc-textfield-helptext" :class="classes" :id="id"> {{text}} </p>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            required: false
        },
        text: {
            type: String,
            required: true
        },
        persistent: {
            type: Boolean,
            required: false
        },
        validationMsg: {
            type: Boolean,
            required: false
        }
    },
    computed: {
        classes() {
            return {
                'mdc-textfield-helptext--persistent': this.persistent,
                'mdc-textfield-helptext--validation-msg': this.validationMsg
            }
        }
    }
}
</script>

<style lang="scss">
@import "@material/textfield/mdc-textfield";
</style>
