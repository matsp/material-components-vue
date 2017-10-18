<template>
    <div class="mdc-layout-grid" :class="classes" :id="id">
        <slot />
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            require: false
        },
        fixedColumnWidth: {
            type: Boolean,
            required: false
        },
        align: {
            type: String,
            validator: value => ['left', 'right'].includes(value),
            required: false
        }
    },
    computed: {
        classes() {
            return {
                'mdc-layout-grid--fixed-column-width': this.fixedColumnWidth,
                'mdc-layout-grid--align-left': (this.align === 'left'),
                'mdc-layout-grid--align-right': (this.align === 'right')
            }
        }
    }
}
</script>

<style lang="scss">
@import "@material/layout-grid/mdc-layout-grid";
</style>


