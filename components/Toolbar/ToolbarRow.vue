<template>
    <div class="mdc-toolbar__row">
        <section class="mdc-toolbar__section mdc-toolbar__section--align-start" :class="shrinkClass(shrinkStart)" v-if="$slots['start']">
            <slot name="start" />
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
</template>

<script>
export default {
    props: {
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
    methods: {
        shrinkClass(prop) {
            return {
                'mdc-toolbar__section--shrink-to-fit': prop
            }
        }
    }
}
</script>
