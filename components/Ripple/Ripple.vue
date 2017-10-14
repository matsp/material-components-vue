<template>
    <div>
        <slot />
    </div>
</template>

<script>
import { MDCRipple } from '@material/ripple'

export default {
    props: {
        unbounded: {
            type: Boolean,
            required: false
        }
    },
    data() {
        return {
            mdcRipple: null
        }
    },
    mounted() {
        if (this.$slots.default) {
            this.$slots.default.map((n, i) => {
                this.mdcRipple = new MDCRipple(n.elm)
            })
            this.unbounded ? this.mdcRipple.unbounded = true : this.mdcRipple.unbounded = false
        }
    },
    beforeDestroy() {
        if (this.$slots.default)
            Object.values(this.mdcRipples).map(n => n.destroy())
    },
    methods: {
        activate() {
            this.mdcRipple.activate()
        },
        deactivate() {
            this.mdcRipple.deactivate()
        }
    }
}
</script>