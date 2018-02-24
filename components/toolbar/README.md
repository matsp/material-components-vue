## Toolbar

### Markup

```html
<m-toolbar ref="toolbar" fixed waterfall>
    <m-toolbar-row>
        <m-toolbar-icon slot="start" icon="menu" menuIcon @click="toggleDrawer" />
        Toolbar
    </m-toolbar-row>
</m-toolbar>
```

### Script

```javascript
methods: {
    toggleDrawer () {
        ...
    }
}
```

### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| flexible | Boolean | - | false | first row of toolbar have flexible space ( for configuration see reference) |
| flexibleDefault | Boolean | - | false | the initial height is 4 times the default size of a toolbar row |
| fixed | Boolean | - | false | fixed on top and have persistent elevation |
| waterfall | Boolean | - | false | gains elevation when a user begins to scroll down the page |
| fixedLastRow | Boolean | - | false | only last row of fixed toolbar anchored on top |

### Slots

| Slot | Prop dependencies | Description |
|------|-------------------|-------------|
| default | - | toolbar content (toolbar row-/s) |

## ToolbarRow

### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| shrinkStart | Boolean | - | false | shrink start section to width of its content |
| shrinkCenter | Boolean | - | false | shrink center section to width of its content |
| shrinkEnd | Boolean | - | false | shrink end section to width of its content |

### Slots

| Slot | Prop dependencies | Description |
|------|-------------------|-------------|
| default | - | toolbar row title |
| start | - | toolbar row start section |
| center | - | toolbar row center section |
| end | - | toolbar row end section |

## ToolbarIcon

### Props & events

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| icon | String | - | true | material icon name |
| menuIcon | String | - | false | whether the icon should be the menu icon |

Events are mapped to the inner element.

## ToolbarFixedAdjust

### Slots

| Slot | Prop dependencies | Description |
|------|-------------------|-------------|
| default | - | content which should be adjusted at the bottom of a toolbar |

### Reference

- https://github.com/material-components/material-components-web/tree/master/packages/mdc-toolbar
