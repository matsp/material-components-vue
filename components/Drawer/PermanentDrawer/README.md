## PermanentDrawer

### Markup

```html
<m-permanent-drawer ref="drawer" primaryToolbarSpacer>
  <span slot="toolbarSpacer" />
  <m-permanent-drawer-item v-for="item in listItems" :key="item.text" :startIcon="item.icon">
    {{item.text}}
  </m-permanent-drawer-item>
</m-permanent-drawer>
```

### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| primaryToolbarSpacer | Boolean | - | false | whether the toolbarSpacer section should be themed as primary color |
| primaryContent | Boolean | - | false | whether the content section should be themed as primary color |

### Slots

| Slot | Prop dependencies | Description |
|------|-------------------|-------------|
| default | - | content section of the drawer |
| toolbarSpacer | primaryToolbarSpacer | adds space with the same size as the toolbar on top of the drawer |

## PermanentDrawerItem

### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| selected | Boolean | - | false | visual select of item |
| startIcon | String | - | false | start icon name |
| endIcon | String | - |  false | end icon name |
| interactive | Boolean | - | false | item with ripple effect |

### Slots

| Slot | Prop dependencies | Description |
|------|-------------------|-------------|
| default | - | item content |

### Reference

- https://github.com/material-components/material-components-web/tree/master/packages/mdc-drawer
