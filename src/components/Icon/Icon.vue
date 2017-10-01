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
        }
    },
    computed: {
        classes() {
            return {
                
            }
        }
    }
}
</script>
