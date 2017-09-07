<template>
    <div class="mdc-layout-grid__cell" :class="classes" :id="id">
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
        span: {
            type: Number,
            required: false
        },
        spanDesktop: {
            type: Number,
            required: false
        },
        spanTablet: {
            type: Number,
            required: false
        },
        spanPhone: {
            type: Number,
            required: false
        },
        order: {
            type: Number,
            required: false
        },
        align: {
            type: String,
            required: false
        }
    },
    computed: {
        classes() {
            return Object.assign({},
                {
                    'mdc-layout-grid__cell--span-1': (this.span === 1),
                    'mdc-layout-grid__cell--span-2': (this.span === 2),
                    'mdc-layout-grid__cell--span-3': (this.span === 3),
                    'mdc-layout-grid__cell--span-4': (this.span === 4),
                    'mdc-layout-grid__cell--span-5': (this.span === 5),
                    'mdc-layout-grid__cell--span-6': (this.span === 6),
                    'mdc-layout-grid__cell--span-7': (this.span === 7),
                    'mdc-layout-grid__cell--span-8': (this.span === 8),
                    'mdc-layout-grid__cell--span-9': (this.span === 9),
                    'mdc-layout-grid__cell--span-10': (this.span === 10),
                    'mdc-layout-grid__cell--span-11': (this.span === 11),
                    'mdc-layout-grid__cell--span-12': (this.span === 12)
                },
                {
                    'mdc-layout-grid__cell--span-1-desktop': (this.spanDesktop === 1),
                    'mdc-layout-grid__cell--span-2-desktop': (this.spanDesktop === 2),
                    'mdc-layout-grid__cell--span-3-desktop': (this.spanDesktop === 3),
                    'mdc-layout-grid__cell--span-4-desktop': (this.spanDesktop === 4),
                    'mdc-layout-grid__cell--span-5-desktop': (this.spanDesktop === 5),
                    'mdc-layout-grid__cell--span-6-desktop': (this.spanDesktop === 6),
                    'mdc-layout-grid__cell--span-7-desktop': (this.spanDesktop === 7),
                    'mdc-layout-grid__cell--span-8-desktop': (this.spanDesktop === 8),
                    'mdc-layout-grid__cell--span-9-desktop': (this.spanDesktop === 9),
                    'mdc-layout-grid__cell--span-10-desktop': (this.spanDesktop === 10),
                    'mdc-layout-grid__cell--span-11-desktop': (this.spanDesktop === 11),
                    'mdc-layout-grid__cell--span-12-desktop': (this.spanDesktop === 12)
                },
                {
                    'mdc-layout-grid__cell--span-1-tablet': (this.spanTablet === 1),
                    'mdc-layout-grid__cell--span-2-tablet': (this.spanTablet === 2),
                    'mdc-layout-grid__cell--span-3-tablet': (this.spanTablet === 3),
                    'mdc-layout-grid__cell--span-4-tablet': (this.spanTablet === 4),
                    'mdc-layout-grid__cell--span-5-tablet': (this.spanTablet === 5),
                    'mdc-layout-grid__cell--span-6-tablet': (this.spanTablet === 6),
                    'mdc-layout-grid__cell--span-7-tablet': (this.spanTablet === 7),
                    'mdc-layout-grid__cell--span-8-tablet': (this.spanTablet === 8),
                    'mdc-layout-grid__cell--span-9-tablet': (this.spanTablet === 9),
                    'mdc-layout-grid__cell--span-10-tablet': (this.spanTablet === 10),
                    'mdc-layout-grid__cell--span-11-tablet': (this.spanTablet === 11),
                    'mdc-layout-grid__cell--span-12-tablet': (this.spanTablet === 12)
                },
                {
                    'mdc-layout-grid__cell--span-1-phone': (this.spanPhone === 1),
                    'mdc-layout-grid__cell--span-2-phone': (this.spanPhone === 2),
                    'mdc-layout-grid__cell--span-3-phone': (this.spanPhone === 3),
                    'mdc-layout-grid__cell--span-4-phone': (this.spanPhone === 4),
                    'mdc-layout-grid__cell--span-5-phone': (this.spanPhone === 5),
                    'mdc-layout-grid__cell--span-6-phone': (this.spanPhone === 6),
                    'mdc-layout-grid__cell--span-7-phone': (this.spanPhone === 7),
                    'mdc-layout-grid__cell--span-8-phone': (this.spanPhone === 8),
                    'mdc-layout-grid__cell--span-9-phone': (this.spanPhone === 9),
                    'mdc-layout-grid__cell--span-10-phone': (this.spanPhone === 10),
                    'mdc-layout-grid__cell--span-11-phone': (this.spanPhone === 11),
                    'mdc-layout-grid__cell--span-12-phone': (this.spanPhone === 12)
                },
                {
                    'mdc-layout-grid__cell--align-top': (this.align === 'top'),
                    'mdc-layout-grid__cell--align-middle': (this.align === 'middle'),
                    'mdc-layout-grid__cell--align-bottom': (this.align === 'bottom')
                },
                {
                    'mdc-layout-grid__cell--order-1': (this.order === 1),
                    'mdc-layout-grid__cell--order-2': (this.order === 2),
                    'mdc-layout-grid__cell--order-3': (this.order === 3),
                    'mdc-layout-grid__cell--order-4': (this.order === 4),
                    'mdc-layout-grid__cell--order-5': (this.order === 5),
                    'mdc-layout-grid__cell--order-6': (this.order === 6),
                    'mdc-layout-grid__cell--order-7': (this.order === 7),
                    'mdc-layout-grid__cell--order-8': (this.order === 8),
                    'mdc-layout-grid__cell--order-9': (this.order === 9),
                    'mdc-layout-grid__cell--order-10': (this.order === 10),
                    'mdc-layout-grid__cell--order-11': (this.order === 11),
                    'mdc-layout-grid__cell--order-12': (this.order === 12)
                })

        }
    }
}
</script>

<style lang="scss">
@import "@material/layout-grid/mdc-layout-grid";
</style>


