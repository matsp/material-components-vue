<template>
    <div class="mdc-toolbar" :class="classes" :id="id">
        <div class="mdc-toolbar__row">
            <section class="mdc-toolbar__section mdc-toolbar__section--align-start">
                <m-icon icon="menu" :toolbarIcon="true" @click.native="toggleDrawer()" />
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
        id: {
            type: String,
            required: false
        },
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
    mounted() {
        const toolbar = new MDCToolbar(this.$el)
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
        toggleDrawer() {
            this.$emit('toggleDrawer');
        }
    }
}
</script>

<style lang="scss">
@import "@material/toolbar/mdc-toolbar";
</style>

