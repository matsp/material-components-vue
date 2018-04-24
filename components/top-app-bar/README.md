## TopAppBar

Actually the mdc-web component enforces users to set a navigation icon, so be sure to set an icon
in the navigation slot!

### Markup

```html
<m-top-app-bar>
  <m-icon
    icon="menu"
    slot="navigation"/>
  <span>Title</span>
  <m-icon
    icon="file_download"
    slot="actions"/>
</m-top-app-bar>
```

### Props & events

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| collapsed | Boolean | false | collapsed bar (must be short too) |
| short | Boolean | false | short bar |
| prominent | Boolean | false | prominent app bar style (could not be short too) |
| dense | Boolean | false | dense app bar style (could not be short too) |

| Event | Description |
|------|------|
| onNavigation | will be dispatched when navigation item is clicked |

### Slots

| Slot | Description |
|------|-------------|
| default | top app bar title |
| navigation | navigation section icons |
| actions | actions section icons |

## TopAppBarFixedAdjust

### Markup

```html
<m-top-app-bar-fixed-adjust dense>
  Some content
</m-top-app-bar-fixed-adjust>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| short | Boolean | false | content adjustment for short top-app-bar |
| dense | Boolean | false | content adjustment for dense top-app-bar |
| prominent | Boolean | false | content adjustment for prominent top-app-bar |
| denseProminent | Boolean | false | content adjustment for dense and prominent top-app-bar |

### Slots

| Slot | Description |
|------|-------------|
| default | content |

### Reference

- https://github.com/material-components/material-components-web/tree/master/packages/mdc-top-app-bar
