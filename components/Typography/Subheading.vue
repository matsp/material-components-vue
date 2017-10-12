<template>
    <div>
        <h3 v-if="level < 2" :class="classes">
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
        level: {
            type: Number,
            required: true,
            validator: (level) => level > 0 && level <= 2,
        }
    },
    computed: {
        classes() {
            let def = {
                'mdc-typography--adjust-margin': this.adjustMargin
            }

            let calc = {}
            calc['mdc-typography--subheading' + this.level] = true

            return Object.assign(def, calc)
        }
    }
}
</script>


