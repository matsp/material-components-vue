<template>
    <div class="mdc-slider" :class="classes" tabindex="0" role="slider" :aria-label="label" :aria-disabled="disabled" @MDCSlider:change="onChange">
        <div class="mdc-slider__track-container">
            <div class="mdc-slider__track"></div>
            <div v-if="displayMarkers" class="mdc-slider__track-marker-container"></div>
        </div>
        <div v-if="discrete" class="mdc-slider__thumb-container">
            <div class="mdc-slider__pin">
                <span class="mdc-slider__pin-value-marker"></span>
            </div>
            <svg class="mdc-slider__thumb" width="21" height="21">
                <circle cx="10.5" cy="10.5" r="7.875"></circle>
            </svg>
            <div class="mdc-slider__focus-ring"></div>
        </div>
        <div v-else class="mdc-slider__thumb-container">
            <svg class="mdc-slider__thumb" width="21" height="21">
                <circle cx="10.5" cy="10.5" r="7.875"></circle>
            </svg>
            <div class="mdc-slider__focus-ring"></div>
        </div>
    </div>
</template>

<script>
import { MDCSlider } from '@material/slider'

export default {
    props: {
        label: {
            type: String,
            required: false
        },
        displayMarkers: {
            type: Boolean,
            required: false
        },
        discrete: {
            type: Boolean,
            required: false
        },
        value: {
            type: Number,
            required: false
        },
        min: {
            type: Number,
            required: true
        },
        max: {
            type: Number,
            required: true
        },
        step: {
            type: Number,
            required: false
        },
        disabled: {
            type: Boolean,
            required: false
        }
    },
    data() {
        return {
            mdcSlider: null
        }
    },
    model: {
        prop: 'value',
        event: 'change'
    },
    mounted() {
        this.mdcSlider = new MDCSlider(this.$el)
        this.mdcSlider.value = this.value
        this.mdcSlider.min = this.min
        this.mdcSlider.max = this.max
        this.mdcSlider.step = this.step
        this.mdcSlider.disabled = this.disabled
    },
    beforeDestroy() {
        this.mdcSlider.destroy()
    },
    watch: {
        value() {
            this.mdcSlider.value = this.value
        },
        min() {
            this.mdcSlider.min = this.min
        },
        max() {
            this.mdcSlider.max = this.max
        },
        step() {
            this.mdcSlider.step = this.step
        },
        disabled() {
            this.mdcSlider.disabled = this.disabled
        }
    },
    computed: {
        classes() {
            return {
                'mdc-slider--discrete': this.discrete,
                'mdc-slider--display-markers': this.displayMarkers
            }
        },
        discreteClasses() {
            return {
                'mdc-slider__track-marker-container': this.displayMarkers
            }
        }
    },
    methods: {
        onChange(event) {
            this.$emit('change', this.mdcSlider.value)
        }
    }
}
</script>

