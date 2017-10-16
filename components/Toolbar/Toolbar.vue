<template>
    <div class="mdc-toolbar" :class="classes">
        <div class="mdc-toolbar__row">
            <section class="mdc-toolbar__section mdc-toolbar__section--align-start" :class="shrinkClass(shrinkStart)" v-if="menuIcon">
                <a class="material-icons mdc-toolbar__icon--menu" @click="onClick">
                    {{menuIcon}}
                </a>
                <span class="mdc-toolbar__title" v-if="$slots['default']">
                    <slot />
                </span>
                <slot name="start" />
            </section>
            <section class="mdc-toolbar__section" :class="shrinkClass(shrinkCenter)" v-if="$slots['center']">
                <slot name="center" />
            </section>
            <section class="mdc-toolbar__section mdc-toolbar__section--align-end" :class="shrinkClass(shrinkEnd)" v-if="$slots['end']">
                <slot name="end" />
            </section>
        </div>
        <slot name="additonalRow" />
    </div>
</template>

<script>
import { MDCToolbar } from '@material/toolbar'

export default {
    props: {
        menuIcon: {
            type: String,
            required: false
        },
        flexible: {
            type: Boolean,
            required: false
        },
        fixed: {
            type: Boolean,
            required: false
        },
        waterfall: {
            type: Boolean,
            required: false
        },
        fixedLastRow: {
            type: Boolean,
            required: false
        },
        shrinkStart: {
            type: Boolean,
            required: false
        },
        shrinkCenter: {
            type: Boolean,
            required: false
        },
        shrinkEnd: {
            type: Boolean,
            required: false
        }
    },
    data() {
        return {
            mdcToolbar: null
        }
    },
    mounted() {
        this.mdcToolbar = MDCToolbar.attachTo(this.$el)
    },
    beforeDestroy() {
        this.mdcToolbar.destroy()
    },
    computed: {
        classes() {
            return {
                'mdc-toolbar--fixed': this.fixed,
                'mdc-toolbar--fixed-lastrow-only': this.fixedLastRow,
                'mdc-toolbar--waterfall': this.waterfall,
                'mdc-toolbar--flexible': this.flexible
            }
        }
    },
    methods: {
        onClick() {
            this.$emit('click');
        },
        shrinkClass(prop) {
            return {
                'mdc-toolbar__section--shrink-to-fit': prop
            }
        }
    }
}
</script>

