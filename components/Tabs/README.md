## TabBar

### Markup

```html
<m-tab-bar scrollable>
    <m-tab href="#home" icon="home">Home</m-tab>
    <m-tab active href="#social" icon="favorite">Like me</m-tab>
    <m-tab href="#about" icon="person">About me</m-tab>
</m-tab-bar>
```

### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| scrollable | Boolean | - | false | whether the tab bar should be scrollable |
| iconTabBar | Boolean | - | false | should be set when there will be icons in the tab label |
| withIconAndText | Boolean | - | false | should be set when there will be icons and text in the tab label |
| accent | Boolean | - | false | secondary theme color |

### Slots

| Slot | Prop dependencies | Description |
|------|-------------------|-------------|
| default | - | tab bar content (tabs) |

## Tab

### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| active | Boolean | - | false | whether the tab should be marked as active |
| label | String | - | false | tab label |
| icon | String | - | false | tab icon |

Non prop events are mapped to the inner button element.

### Slots

| Slot | Prop dependencies | Description |
|------|-------------------|-------------|
| default | - | tab label |

### Reference

- https://github.com/material-components/material-components-web/tree/master/packages/mdc-tabs
