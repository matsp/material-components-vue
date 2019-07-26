## Button

### Markup

```html
<m-button
  raised
  @click="onClick">
  Button
</m-button>

<m-button unelevated>
  <m-icon
    slot="icon"
    icon="cloud"/>
  Button
</m-button>

<m-button disabled>Button</m-button>
<m-button href="https://github.com/matsp/material-components-vue">Github</m-button>

<m-button>
  <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="...">
    ...
  </svg>
</m-button>
```
### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| raised | Boolean | false | raised button |
| unelevated | Boolean | false | unelevated button |
| outlined | Boolean | false | outlined button |
| dense | Boolean | false | dense button |
| href | String | '' | link button |
| ripple | Boolean | true | use js ripple or not |

Non prop attributes and events are mapped to the inner button element.

### Slots

| Slot | Description |
|------|-------------|
| default | button label |
| icon | leading icon component |
| trailingIcon | trailing icon component |

### Reference

- https://github.com/material-components/material-components-web/tree/master/packages/mdc-button
