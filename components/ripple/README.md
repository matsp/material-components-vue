## Ripple

Material Components Vue provides a customized directive `v-ripple` to provide any components with ripple effect.

### Minimal Usage

```html
<my-button v-ripple>Button</my-button>
``` 

### Use primary color as ripple color

```html
<my-button v-ripple.primary>Button</my-button>
```

### Use secondary color as ripple color

```html
<my-button v-ripple.accent>Button</my-button>
```

### Customized your ripple using SASS

```html
<template>
    <my-button class="my-surface" v-ripple.customized>Button</my-button>
</template>

<style lang="scss">
    @import "~@material/ripple/mixins";

    .my-surface {
      @include mdc-ripple-surface;
      @include mdc-ripple-radius-bounded;
      @include mdc-states-base-color(black);
      @include mdc-states-hover-opacity(.1);
      @include mdc-states-focus-opacity(.3);
      @include mdc-states-press-opacity(.4);
    }
</style>
```

### CSS-Only ripple

```html
<my-button v-ripple.primary.css-only>Button</my-button>
```

### Activate or deactivate using binding value

```html
<template>
    <my-button v-ripple.primary="activate">Button</my-button>
</template>

<script>
    export default {
      mixins: [baseComponentMixin, themeClassMixin],
      data () {
        return {
          activate: false // activate when changed from false to true, otherwise deactivate
        }
      }
    }
</script>
```

Content below is deprecated, which means they may be removed in the future versions.

### Markup

```html
<m-ripple>
    Ripple
</m-ripple>
```

### Props & methods

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| unbounded | Boolean | false | unbounded ripple |
| accent | Boolean | false | ripple with secondary theme color |

### Slots

| Slot | Description |
|------|-------------|
| default | ripple content |

### Reference

- https://github.com/material-components/material-components-web/tree/master/packages/mdc-ripple
