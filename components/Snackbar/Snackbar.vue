<template>
    <div class="mdc-snackbar" :class="classes">
        <div class="mdc-snackbar__text" />
        <div class="mdc-snackbar__action-wrapper">
            <button type="button" class="mdc-button mdc-snackbar__action-button" />
        </div>
    </div>
</template>

<script>
import { MDCSnackbar } from '@material/snackbar';

export default {
    props: {
        alignStart: {
            type: Boolean,
            required: false
        },
        dismissesOnAction: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            mdcSnackbar: null
        }
    },
    methods: {
        show() {
            this.mdcSnackbar.show(options)
        }
    },
    computed: {
        classes() {
            return {
                'mdc-snackbar--align-start': this.alignStart
            }
        }
    },
    mounted() {
        this.mdcSnackbar = MDCSnackbar.attachTo(this.$el)
        this.mdcSnackbar.dismissesOnAction = this.dismissesOnAction
    },
    beforeDestroy() {
        this.mdcSnackbar.destroy()
    }
}
</script>

<style lang="scss">
@import "@material/snackbar/mdc-snackbar";
@import "@material/button/mdc-button";

.mdc-snackbar {
    transform: translateY(100%);
}
</style>
