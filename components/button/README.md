## Button

### Markup

```html
<m-button interactive raised @click="onClick">Button</m-button>
<m-button unelevated>
  <m-icon slot="icon" icon="cloud"/>
  Button
</m-button>
<m-button disabled>Button</m-button>
<m-button interactive href="https://github.com/matsp/material-components-vue">Github</m-button>
```
### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| raised | Boolean | false | raised button |
| unelevated | Boolean | false | unelevated button |
| stroked | Boolean | false | stroked button |
| dense | Boolean | false | dense button |
| interactive | Boolean | false | button with ripple effect |
| href | String | ' ' | link button |

Non prop attributes and events are mapped to the inner button element.

### Slots

| Slot | Description |
|------|-------------|
| default | button label |
| icon | icon component |

### Reference

- https://github.com/material-components/material-components-web/tree/master/packages/mdc-button
