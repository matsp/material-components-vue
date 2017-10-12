<template>
    <div class="mdc-toolbar" :class="classes">
        <div class="mdc-toolbar__row">
            <section class="mdc-toolbar__section mdc-toolbar__section--align-start">
                <a class="material-icons mdc-toolbar__icon--menu" @click="menuClicked">
                    menu
                </a>
                <span class="mdc-toolbar__title">{{title}}</span>
                <slot name="toolbarStart" />
            </section>
            <section class="mdc-toolbar__section" v-if="$slots['toolbarCenter']">
                <slot name="toolbarCenter" />
            </section>
            <section class="mdc-toolbar__section mdc-toolbar__section--align-end" v-if="$slots['toolbarEnd']">
                <slot name="toolbarEnd" />
            </section>
        </div>
    </div>
</template>

<script>
import { MDCToolbar } from '@material/toolbar'

export default {
    props: {
        title: {
            type: String,
            required: false
        },
        fixed: {
            type: Boolean,
            required: false
        },
        waterfall: {
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
        this.mdcToolbar = new MDCToolbar(this.$el)
    },
    destroyed() {
        this.mdcToolbar.destroy()
    },
    computed: {
        classes() {
            return {
                'mdc-toolbar--fixed': this.fixed,
                'mdc-toolbar--waterfall': this.waterfall
            }
        }
    },
    methods: {
        menuClicked() {
            this.$emit('clicked');
        }
    }
}
</script>

