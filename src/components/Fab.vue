<template>
    <button v-bind:class="classes" data-mdc-auto-init="MDCRipple">
        <span class="mdc-fab__icon">
            {{icon}}
        </span>
    </button>
</template>

<script>
import { MDCRipple } from '@material/ripple';
export default {
    props: ['modifier', 'icon'],
    data() {
        return {
            class: ['mdc-fab', 'material-icons']
        }
    },
    computed: {
        classes() {
            let tmpClass = this.class
            String(this.modifier).split(' ').map((n) =>
                tmpClass.push('mdc-fab--' + n))
            return tmpClass
        }
    },
    mounted() {
        MDCRipple.attachTo(this.$el)
    }
}
</script>

<style lang="scss">
@import "@material/fab/mdc-fab";
.mdc-fab--absolute.mdc-fab--absolute {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
}

@media(min-width: 1024px) {
    .mdc-fab--absolute.mdc-fab--absolute {
        bottom: 1.5rem;
        right: 1.5rem;
    }
}
</style>
