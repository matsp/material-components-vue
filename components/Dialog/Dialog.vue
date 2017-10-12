<template>
    <aside class="mdc-dialog" role="alertdialog" @MDCDialog:accept="onAccept" @MDCDialog:cancel="onCancel">
        <div class="mdc-dialog__surface">
            <header class="mdc-dialog__header" v-if="$slots['header']">
                <slot name="header" />
            </header>
            <section class="mdc-dialog__body" v-if="$slots['body']">
                <slot name="body" />
            </section>
            <footer class="mdc-dialog__footer" v-if="$slots['acceptButton'] || $slots['cancelButton'] || $slots['dialogButton']">
                <slot name="acceptButton" />
                <slot name="cancelButton" />
                <slot name="dialogButton" />
            </footer>
        </div>
        <div class="mdc-dialog__backdrop"></div>
    </aside>
</template>

<script>
import { MDCDialog } from '@material/dialog';

export default {
    data() {
        return {
            mdcDialog: null
        }
    },
    mounted() {
        let vm = this;
        vm.mdcDialog = new MDCDialog(this.$el)

        if (vm.$slots.acceptButton)
            vm.$slots.acceptButton.map((n) => {
                n.elm.classList.add('mdc-dialog__footer__button')
                n.elm.classList.add('mdc-dialog__footer__button--accept')
            })
        if (vm.$slots.cancelButton)
            vm.$slots.cancelButton.map((n) => {
                n.elm.classList.add('mdc-dialog__footer__button')
                n.elm.classList.add('mdc-dialog__footer__button--cancel')
            })
        if (vm.$slots.dialogButton)
            vm.$slots.dialogButton.map((n) => {
                n.elm.classList.add('mdc-dialog__footer__button')
            })
    },
    destroyed() {
        this.mdcDialog.destroy()
    },
    methods: {
        onAccept() {
            this.$emit('accepted')
        },
        onCancel() {
            this.$emit('canceled')
        },
        show() {
            this.mdcDialog.show()
        }
    }
}
</script>
