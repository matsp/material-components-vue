<template>
    <h1 :class="classes">
        <slot />
    </h1>
</template>

<script>
export default {
    props: {
        adjustMargin: {
            type: Boolean,
            default: true
        },
        value: {
            type: Number,
            required: true,
            validator: (value) => value > 0 && value <= 4,
        }
    },
    computed: {
        classes() {
            let def = {
                'mdc-typography--adjust-margin': this.adjustMargin
            }

            let calc = {}
            calc['mdc-typography--display' + this.value] = true

            return Object.assign(def, calc)
        }
    }
}
</script>


