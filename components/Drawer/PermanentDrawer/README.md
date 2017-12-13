## PermanentDrawer

### Markup

```html
<m-permanent-drawer primaryToolbarSpacer>
  <span slot="toolbarSpacer" />
  <m-list>
    <m-list-item v-for="item in listItems" :key="item.text">
      <m-icon slot="graphic" :icon="item.icon" />
      {{item.text}}
    </m-list-item>
  </m-list>
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

### Reference

- https://github.com/material-components/material-components-web/tree/master/packages/mdc-drawer
