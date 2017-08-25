<template>
    <div class="mdc-toolbar" v-bind:class="classes">
        <div class="mdc-toolbar__row">
            <section class="mdc-toolbar__section mdc-toolbar__section--align-start">
                <a class="material-icons mdc-toolbar__icon--menu" @click="toggleDrawer()">menu</a>
                <span class="mdc-toolbar__title">{{title}}</span>
                <slot name="start" />
            </section>
            <section class="mdc-toolbar__section" v-if="$slots['center']">
                <slot name="center" />
            </section>
            <section class="mdc-toolbar__section mdc-toolbar__section--align-end" v-if="$slots['end']">
                <slot name="end" />
            </section>
        </div>
    </div>
</template>

<script>
import { MDCToolbar } from '@material/toolbar'

export default {
    props: ['title', 'modifier'],
    mounted() {
        const toolbar = new MDCToolbar(this.$el)
    },
    computed: {
        classes() {
            return Array.from(this.modifier, (n) =>
                'mdc-toolbar--' + n)
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

