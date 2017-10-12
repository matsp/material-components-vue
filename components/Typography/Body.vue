<template>
    <p :class="classes">
        <slot />
    </p>
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
            validator: (value) => value > 0 && value <= 2,
        }
    },
    computed: {
        classes() {
            let def = {
                'mdc-typography--adjust-margin': this.adjustMargin
            }

            let calc = {}
            calc['mdc-typography--body' + this.value] = true

            return Object.assign(def, calc)
        }
    }
}
</script>


