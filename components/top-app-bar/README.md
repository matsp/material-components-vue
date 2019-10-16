## Top App Bar

Top App Bar acts as a container for items such as application title, navigation icon, and action items.

Actually the mdc-web component enforces users to set a navigation icon, so be sure to set an icon
in the navigation slot!

### Markup

```html
<m-top-app-bar>
  <m-icon-button
    icon="menu"
    slot="navigation"
    title="Title"
  />
  <template slot="actions">
    <m-icon-button icon="file_download"/>
    <m-icon-button icon="print"/>
    <m-icon-button icon="bookmark"/>
  </template>
</m-top-app-bar>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| collapsed | Boolean | false | collapsed bar (must be short too) |
| short | Boolean | false | short bar |
| prominent | Boolean | false | prominent app bar style (could not be short too) |
| dense | Boolean | false | dense app bar style (could not be short too) |
| fixed | Boolean | false | style the top app bar as a fixed top app bar. |
| title | String | '' | title of the top app bar |
| scrollTarget | EventTarget | *window* |  Sets scroll target to different DOM node. |

### Events

| Event | Payload | Description |
|-------|---------|-------------|
| nav | undefined | Emits when the navigation icon is clicked. |

### Slots

| Slot | Description |
|------|-------------|
| default | content between the start and the end session |
| start | content in the start session except for title and navigation button |
| end | content in the end session except for icon button actions |
| navigation | navigation section icon buttons |
| actions | actions section icons buttons |

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
| tag | String | 'div' | html tag to be rendered |

### Slots

| Slot | Description |
|------|-------------|
| default | content |

### Reference

- https://github.com/material-components/material-components-web/tree/master/packages/mdc-top-app-bar
