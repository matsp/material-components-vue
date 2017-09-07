<template>
    <ul class="mdc-list" :class="classes" :id="id">
        <slot />
    </ul>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            required: false
        },
        darkTheme: {
            type: Boolean,
            required: false
        },
        dense: {
            type: Boolean,
            required: false
        },
        twoLine: {
            type: Boolean,
            required: false
        },
        avatar: {
            type: Boolean,
            required: false
        }
    },
    computed: {
        classes() {
            return {
                'mdc-list--theme-dark': this.darkTheme,
                'mdc-list--theme-dense': this.dense,
                'mdc-list--two-line': this.twoLine,
                'mdc-list--avatar-list': this.avatar
            }

            let tmpClass = this.class
            tmpClass.push((this.modifier ? 'mdc-list--' + this.modifier : ''))
            return tmpClass
        }
    }
}
</script>

<style lang="scss">
@import "@material/list/mdc-list";
</style>


