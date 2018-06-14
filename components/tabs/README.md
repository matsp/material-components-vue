## TabBar

### Markup

```html
<m-tab-bar scrollable>
    <m-tab href="#home">
        <m-icon slot="icon" icon="home"/>
        Home
    </m-tab>
    <m-tab active href="#social">
        <m-icon slot="icon" icon="favorite"/>
        Like me
    </m-tab>
    <m-tab href="#about">
        <m-icon slot="icon" icon="person"/>
        About me
    </m-tab>
</m-tab-bar>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| scrollable | Boolean | false | whether the tab bar should be scrollable |
| iconTabBar | Boolean | false | should be set when there will be icons in the tab label |
| withIconAndText | Boolean | false | should be set when there will be icons and text in the tab label |

### Slots

| Slot | Description |
|------|-------------|
| default | tab bar content (tabs) |

## Tab

### Props

| Prop | Type | Default |Description |
|------|------|---------|------------|
| active | Boolean | false | whether the tab should be marked as active |
| label | Boolean | true | whether the label in the default slot should be visible |

Non prop events are mapped to the inner button element.

### Slots

| Slot | Description |
|------|-------------|
| default | tab label |
| icon | icon component |

### Reference

- https://github.com/material-components/material-components-web/tree/master/packages/mdc-tabs
