## DrawerPersistent

### Markup

```html
<m-drawer-persistent ref="drawer">
  <m-drawer-toolbar-spacer slot="toolbarSpacer"/>
  <m-drawer-content>
    <m-list>
      <m-list-item v-for="item in listItems" :key="item.text">
        <m-icon slot="graphic" :icon="item.icon"/>
        {{item.text}}
      </m-list-item>
    </m-list>
  </m-drawer-content>
</m-drawer-persistent>
```
### Script

```javascript
this.$refs.drawer.toggle()
```

### Props & methods

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| initialOpen | Boolean | true | whether the drawer should be open at start |

Non prop events are mapped to the inner button element.

| Method | Description |
|--------|-------------|
| toggle | toggles the drawer |

### Slots

| Slot | Description |
|------|-------------|
| default | content section of the drawer |
| toolbarSpacer | adds space with the same size as the toolbar on top of the drawer |
| header | header section of the drawer |


### Reference

- https://github.com/material-components/material-components-web/tree/master/packages/mdc-drawer
