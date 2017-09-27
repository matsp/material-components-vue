<template>
    <a class="material-icons" :class="classes" :id="id" v-on="$listeners">
        {{icon}}
    </a>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            required: false
        },
        icon: {
            type: String,
            required: true
        },
        toolbarIcon: {
            type: Boolean,
            required: false
        }
    },
    computed: {
        classes() {
            return {
                'mdc-toolbar__icon--menu': this.toolbarIcon
            }
        }
    }
}
</script>
