## PermanentDrawer

### Markup

```html
<m-permanent-drawer>
  <span slot="toolbarSpacer" />
  <m-list>
    <m-list-item v-for="item in listItems" :key="item.text">
      <m-icon slot="graphic" :icon="item.icon" />
      {{item.text}}
    </m-list-item>
  </m-list>
</m-permanent-drawer>
```

### Slots

| Slot | Prop dependencies | Description |
|------|-------------------|-------------|
| default | - | content section of the drawer |
| toolbarSpacer | - | adds space with the same size as the toolbar on top of the drawer |

### Reference

- https://github.com/material-components/material-components-web/tree/master/packages/mdc-drawer
