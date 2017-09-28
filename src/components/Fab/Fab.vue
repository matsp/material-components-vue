<template>
    <button class="mdc-fab" :class="classes" :id="id" v-on="$listeners">
        <span class="mdc-fab__icon">
            {{icon}}
        </span>
    </button>
</template>

<script>
import { MDCRipple } from '@material/ripple';
export default {
    props: {
        mini: {
            type: Boolean,
            required: false
        },
        absoluteRight: {
            type: Boolean,
            required: false
        },
        id: {
            type: String,
            required: false
        },
        icon: {
            type: String,
            required: true
        },
        interactive: {
            type: Boolean,
            required: false
        }
    },
    data() {
        return {
            mdcRipple: null
        }
    },
    computed: {
        classes() {
            return {
                'material-icons': true,
                'mdc-fab--mini': this.mini,
                'mdc-fab--absolute-right': this.absoluteRight
            }  
        }
    },
    mounted() {
        if (this.interactive)
            this.mdcRipple = new MDCRipple(this.$el)
    },
    destroyed() {
        this.mdcRipple.destroy()
    }
}
</script>

<style lang="scss">
@import "@material/fab/mdc-fab";
.mdc-fab--absolute-right.mdc-fab--absolute-right {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
}

@media(min-width: 1024px) {
    .mdc-fab--absolute-right.mdc-fab--absolute-right {
        bottom: 1.5rem;
        right: 1.5rem;
    }
}
</style>
