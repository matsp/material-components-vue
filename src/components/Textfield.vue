<template>
    <label class="mdc-textfield">
        <input type="text" class="mdc-textfield__input" :value="value" />
        <span class="mdc-textfield__label">{{label}}</span>
    </label>
</template>

<script>
import { MDCTextfield } from '@material/textfield'

export default {
    props: ['label', 'value'],
    mounted() {
        const textfield = new MDCTextfield(this.$el)
    }
}
</script>

<style lang="scss">
@import "@material/textfield/mdc-textfield";
</style>