<template>
    <li class="mdc-grid-tile" v-on="$listeners">
        <div class="mdc-grid-tile__primary">
                <img v-if="imgSrc" class="mdc-grid-tile__primary-content" :src="imgSrc" />
        </div>
        <span class="mdc-grid-tile__secondary" v-if="$slots['secondary']">
            <slot name="secondary" />
        </span>
    </li>
</template>

<script>
export default {
    props: {
        imgSrc: {
            type: String,
            required: false
        }
    }
}
</script>