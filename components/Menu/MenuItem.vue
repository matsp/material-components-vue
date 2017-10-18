<template>
    <li class="mdc-list-item" v-on="$listeners" role="menuitem" :tabindex="disabled?'-1':'0'" :aria-disabled="disabled">
       <div class="mdc-list-item__start-detail" v-if="$slots['startDetail']">
            <slot name="startDetail" />
        </div>
        <slot />
        <span class="mdc-list-item__text" v-if="$slots['primaryText']">
            <slot name="primaryText" />
            <div class="mdc-list-item__text__secondary" v-if="$slots['secondaryText']">
                <slot name="secondaryText" />
            </div>
        </span>
        <div class="mdc-list-item__end-detail" v-if="$slots['endDetail']">
            <slot name="endDetail" />
        </div>
    </li>
</template>

<script>

export default {
    props: {
        disabled: {
            type: Boolean,
            required: false
        }
    }
}
</script>

<style lang="scss">
@import "@material/list/mdc-list";
</style>