<template>
    <icon v-bind:class="classes" :icon="icon">
        
    </icon>
</template>

<script>
import { MDCIconToggle } from '@material/icon-toggle'
import Icon from 'components/Icon'

export default {
    props: ['modifier', 'icon'],
    data() {
        return {
            class: ['mdc-icon-toggle'],
            iconToggle: null
        }
    },
    components: { Icon },
    mounted() {
        this.iconToggle = new MDCIconToggle(this.$el)
    },
    computed: {
        classes() {
            let tmpClass = this.class
            tmpClass.push((this.modifier ? 'mdc-icon-toggle--' + this.modifier : ''))
            return tmpClass
        }
    }
}
</script>

<style lang="scss">
@import '@material/icon-toggle/mdc-icon-toggle';
</style>
