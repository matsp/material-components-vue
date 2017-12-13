## PersistentDrawer

### Markup

```html
<m-persistent-drawer ref="drawer" primaryToolbarSpacer>
  <span slot="toolbarSpacer" />
  <m-list>
    <m-list-item v-for="item in listItems" :key="item.text">
      <m-icon slot="graphic" :icon="item.icon" />
      {{item.text}}
    </m-list-item>
  </m-list>
</m-persistent-drawer>
```
### Script

```javascript
this.$refs.drawer.toggle()
```

### Props & methods

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| initialOpen | Boolean | - | false | whether the drawer should be open at start |
| primaryToolbarSpacer | Boolean | - | false | whether the toolbarSpacer section should be themed as primary color |
| primaryHeader | Boolean | - | false | whether the header section should be themed as primary color | 
| primaryContent | Boolean | - | false | whether the content section should be themed as primary color |

Non prop events are mapped to the inner button element.

| Method | Description |
|--------|-------------|
| toggle | toggles the drawer |

### Slots

| Slot | Prop dependencies | Description |
|------|-------------------|-------------|
| default | - | content section of the drawer |
| toolbarSpacer | primaryToolbarSpacer | adds space with the same size as the toolbar on top of the drawer |
| header | primaryHeader | header section of the drawer |


### Reference

- https://github.com/material-components/material-components-web/tree/master/packages/mdc-drawer
