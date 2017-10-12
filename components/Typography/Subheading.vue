<template>
    <div>
        <h3 v-if="value < 2" :class="classes">
            <slot />
        </h3>
        <h4 v-else :class="classes">
            <slot />
        </h4>
    </div>
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
            calc['mdc-typography--subheading' + this.value] = true

            return Object.assign(def, calc)
        }
    }
}
</script>


