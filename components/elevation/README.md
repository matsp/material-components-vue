## Elevation

### Markup

```html
<m-elevation :level="20" transition>
    <span>elevated</span>
</m-elevation>
```
### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| level | Number | - | true | level of elevation between 1 and 24 |
| transition | Boolean | - | false | whether there should be transition between elevation levels |

### Slots

| Slot | Prop dependencies | Description |
|------|-------------------|-------------|
| default | - | elevation content |

### Reference

- https://github.com/material-components/material-components-web/tree/master/packages/mdc-elevation
