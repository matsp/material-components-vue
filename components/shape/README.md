## Shape

### Markup

```html
<m-shape
  class="my-shape-container"
  topLeft
  bottomRight>
  <m-button
    interactive
    unelevated>
    Button
  </m-button>
</m-shape>
```

### Style

```scss
@import "@material/shape/mixins";

.my-shape-container {
  @include mdc-shape-angled-corner(#fff, 10px);
}
```
### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| topLeft | Boolean | false | top left corner will be angled |
| topRight | Boolean | false | top right corner will be angled |
| bottomLeft | Boolean | false | bottom left corner will be angled |
| bottomRight | Boolean | false | bottom right corner will be angled |

### Slots

| Slot | Description |
|------|-------------|
| default | unelevated component |

### Reference

- https://github.com/material-components/material-components-web/tree/master/packages/mdc-shape
