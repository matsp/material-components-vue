## Fab

### Markup

```html
<m-fab mini absoluteRight>
  <m-icon icon="favorite" @click="..."/>
</m-fab>
```
### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| mini | Boolean | false | mini fab button |
| absoluteRight | Boolean | false | whether the fab should be rendered on the bottom right |
| exited | Boolean | false | animates the fab out of view |
| interactive | Boolean | false | fab with ripple effect |

Events are mapped to the inner button element.

### Slots

| Slot | Description |
|------|-------------|
| default | icon component |

### Reference

- https://github.com/material-components/material-components-web/tree/master/packages/mdc-fab
