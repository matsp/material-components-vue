<template>
    <aside class="mdc-dialog" role="alertdialog" :id="id">
        <div class="mdc-dialog__surface">
            <header class="mdc-dialog__header" v-if="$slots['dialogHeader']">                
                <h1 v-if="heading === 1" class="mdc-dialog__header__title">
                    <slot name="dialogHeader" />
                </h1>
                <h2 v-if="heading === 2" class="mdc-dialog__header__title">
                    <slot name="dialogHeader" />
                </h2>
                <h3 v-if="heading === 3" class="mdc-dialog__header__title">
                    <slot name="dialogHeader" />
                </h3>
            </header>
            <section class="mdc-dialog__body" v-if="$slots['dialogBody']">
                <slot name="dialogBody" />
            </section>
            <footer class="mdc-dialog__footer" v-if="$slots['dialogAcceptButton'] || $slots['dialogCancelButton'] || $slots['dialog Button']">
                <slot name="dialogAcceptButton" />
                <slot name="dialogCancelButton" />
                <slot name="dialogButton" />
            </footer>
        </div>
        <div class="mdc-dialog__backdrop"></div>
    </aside>
</template>

<script>
import { MDCDialog } from '@material/dialog';

export default {
    props: {
        visible: {
            type: Boolean,
            required: false
        },
        id: {
            type: String,
            required: false
        },
        heading: {
            type: Number,
            required: true
        }
    },
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

        if (vm.$slots.dialogAcceptButton)
            vm.$slots.dialogAcceptButton.map((n) => {
                n.elm.classList.add('mdc-dialog__footer__button')
                n.elm.classList.add('mdc-dialog__footer__button--accept')
            })
        if (vm.$slots.dialogCancelButton)
            vm.$slots.dialogCancelButton.map((n) => {
                n.elm.classList.add('mdc-dialog__footer__button')
                n.elm.classList.add('mdc-dialog__footer__button--cancel')
            })
        if (vm.$slots.dialogButton)
            vm.$slots.dialogCancelButton.map((n) => {
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


