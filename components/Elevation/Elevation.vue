<template>
    <div :class="classes">
        <slot />
    </div>
</template>

<script>
export default {
    props: {
        level: {
            type: Number,
            required: true,
            validator: (value) => value >= 1 && value <= 24
        },
        transition: {
            type: Boolean,
            default: true
        }
    },
    computed: {
        classes() {
            let calc = {}
            calc['mdc-elevation--z' + this.level] = true
            return Object.assign(calc, { 'mdc-elevation-transition': this.transition })
        }
    }
}
</script>

