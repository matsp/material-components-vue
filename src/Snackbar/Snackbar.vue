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
        id: {
            type: String,
            required: false
        },
        alignStart: {
            type: Boolean,
            required: false
        },
        dismissesOnAction: {
            type: Boolean,
            default: true
        },
        show: {
            type: Boolean,
            default: false
        },
        message: {
            type: String,
            required: true
        },
        timeout: {
            type: Number,
            required: false
        },
        actionHandler: {
            type: Function,
            required: false
        },
        actionText: {
            type: String,
            required: false
        },
        multiline: {
            type: Boolean,
            required: false
        },
        actionOnBottom: {
            type: Boolean,
            required: false
        }
    },
    data() {
        return {
            mdcSnackbar: null
        }
    },
    watch: {
        show() {
            let options = {
                message: this.message,
                timeout: this.timeout !== undefined ? this.timeout : null,
                actionHandler: this.actionHandler !== undefined ? this.actionHandler : null,
                actionText: this.actionText !== undefined ? this.actionText : null,
                multiline: this.multiline ? true : false,
                actionOnBottom: this.actionOnBottom ? true : false
            }
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
        this.mdcSnackbar = new MDCSnackbar(this.$el);
        this.mdcSnackbar.dismissesOnAction = this.dismissesOnAction
    },
    destroyed() {
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

