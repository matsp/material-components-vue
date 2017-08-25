<template>
    <aside id="my-mdc-dialog" class="mdc-dialog" role="alertdialog">
        <div class="mdc-dialog__surface">
            <header class="mdc-dialog__header" v-if="$slots['header']">
                <h2 class="mdc-dialog__header__title">
                    <slot name="header" />
                </h2>
            </header>
            <section class="mdc-dialog__body" v-if="$slots['body']">
                <slot name="body" />
            </section>
            <footer class="mdc-dialog__footer" v-if="$slots['footer']">
                <slot name="footer" />
            </footer>
        </div>
        <div class="mdc-dialog__backdrop"></div>
    </aside>
</template>

<script>
import {MDCDialog} from 'mdc-dialog';

export default {
    data() {
        return {
            dialog: null
        }
    },
    mounted() {
        this.dialog = new MDCDialog(this.$el)

        if (this.$slots.footer)
            this.$slots.footer.map((n) => {
                n.elm.classList.add('mdc-dialog__footer__button')
            })
    }
}
</script>

<style lang="scss">
@import "@material/dialog/mdc-dialog";
</style>


