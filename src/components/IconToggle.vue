<template>
    <i class="mdc-icon-toggle" :class="classes" :id="id" role="button" :data-toggle-on="dataToggleOn" :data-toggle-off="dataToggleOff" @click="toggleState">
        {{icon+'_border'}}
    </i>
</template>

<script>
import { MDCIconToggle } from '@material/icon-toggle'
import { debounce } from '../utils'

export default {
    props: {
        id: {
            type: String,
            required: false
        },
        icon: {
            type: String,
            required: true
        },
        disabled: {
            type: Boolean,
            required: false
        },
        primary: {
            type: Boolean,
            required: false
        },
        accent: {
            type: Boolean,
            required: false
        },
        labelOn: {
            type: String,
            required: false
        },
        labelOff: {
            type: String,
            required: false
        },
        value: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            iconToggle: null
        }
    },
    mounted() {
        this.iconToggle = new MDCIconToggle(this.$el)
        this.iconToggle.disabled = this.disabled
        this.iconToggle.on = this.value
    },
    computed: {
        classes() {
            return {
                'material-icons': true,
                'mdc-icon-toggle--disabled': this.disabled,
                'mdc-icon-toggle--primary': this.primary,
                'mdc-icon-toggle--accent': this.accent
            }
        },
        dataToggleOn() {
            return JSON.stringify({ 'content': this.icon, 'label': this.labelOn })
        },
        dataToggleOff() {
            return JSON.stringify({ 'content': this.icon + '_border', 'label': this.labelOff })
        }
    },
    methods: {
        toggleState() {
            debounce(this.$emit('input', !this.value))
        }
    },
    watch: {
        disabled() {
            this.iconToggle.disabled = this.disabled
        }
    }
}
</script>

<style lang="scss">
@import '@material/icon-toggle/mdc-icon-toggle';
</style>
