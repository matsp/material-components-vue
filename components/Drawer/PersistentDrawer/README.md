## PersistentDrawer

### Markup

```html
<m-persistent-drawer ref="drawer" primaryToolbarSpacer>
  <span slot="toolbarSpacer" />
  <m-persistent-drawer-item v-for="item in listItems" :key="item.text" :startIcon="item.icon">
    {{item.text}}
  </m-persistent-drawer-item>
</m-persistent-drawer>
```
### Script

```javascript
this.$refs.drawer.toggle()
```

### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| initialOpen | Boolean | - | false | whether the drawer should be open at start |
| primaryToolbarSpacer | Boolean | - | false | whether the toolbarSpacer section should be themed as primary color |
| primaryHeader | Boolean | - | false | whether the header section should be themed as primary color | 
| primaryContent | Boolean | - | false | whether the content section should be themed as primary color |

Non prop events are mapped to the inner button element.

### Slots

| Slot | Prop dependencies | Description |
|------|-------------------|-------------|
| default | - | content section of the drawer |
| toolbarSpacer | primaryToolbarSpacer | adds space with the same size as the toolbar on top of the drawer |
| header | primaryHeader | header section of the drawer |

## PersistentDrawerItem

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
