<template>
    <aside class="mdc-dialog" role="alertdialog">
        <div class="mdc-dialog__surface">
            <header class="mdc-dialog__header" v-if="$slots['header']">
                <h2 class="mdc-dialog__header__title">
                    <slot name="header" />
                </h2>
            </header>
            <section class="mdc-dialog__body" v-if="$slots['body']">
                <slot name="body" />
            </section>
            <footer class="mdc-dialog__footer" v-if="$slots['footerAcceptButton'] || $slots['footerCancelButton'] || $slots['footerButton']">
                <slot name="footerAcceptButton" />
                <slot name="footerCancelButton" />
                <slot name="footerButton" />
            </footer>
        </div>
        <div class="mdc-dialog__backdrop"></div>
    </aside>
</template>

<script>
import { MDCDialog } from '@material/dialog';

export default {
    props: ['visible'],
    data() {
        return {
            dialog: null
        }
    },
    mounted() {
        let vm = this;
        vm.dialog = new MDCDialog(this.$el)
        vm.dialog.listen('MDCDialog:accept', function() {
            vm.$emit('accept')
        })
        vm.dialog.listen('MDCDialog:cancel', function() {
            vm.$emit('cancel')
        })

        if (vm.$slots.footerAcceptButton)
            vm.$slots.footerAcceptButton.map((n) => {
                n.elm.classList.add('mdc-dialog__footer__button')
                n.elm.classList.add('mdc-dialog__footer__button--accept')
            })
        if (vm.$slots.footerCancelButton)
            vm.$slots.footerCancelButton.map((n) => {
                n.elm.classList.add('mdc-dialog__footer__button')
                n.elm.classList.add('mdc-dialog__footer__button--cancel')
            })
        if (vm.$slots.footerButton)
            vm.$slots.footerCancelButton.map((n) => {
                n.elm.classList.add('mdc-dialog__footer__button')
            })
    },
    watch: {
        visible() {
            this.visible ? this.dialog.show() : this.dialog.close()
        }
    }
}
</script>

<style lang="scss">
@import "@material/dialog/mdc-dialog";
</style>


