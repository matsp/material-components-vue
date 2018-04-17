## Menu

### Markup

```html
<m-menu-anchor>
  <m-button raised interactive @click="isMenuOpen=true">open</m-button>
  <m-menu v-model="isMenuOpen">
    <m-list>
      <m-list-item interactive>Entry 1</m-list-item>
      <m-list-divider/>
      <m-list-item interactive>Entry 2</m-list-item>
    </m-list>
  </m-menu>
</m-menu-anchor>
```

### Script

```javascript
data() {
    return {
        isMenuOpen: false
    }
}

```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| quickOpen | Boolean | false | deactivates menu animation |

### Events

| Event | Payload | Description |
|-------|---------|-------------|
| select | { index: Number, item: HTMLElement } | emitted when menu item is selected |
| cancel | - | emitted when menu interaction is cancelled |

### Slots

| Slot |  Description |
|------|-------------|
| default | menu content (list) |

## MenuAnchor

### Slots

| Slot | Description |
|------|-------------|
| default | should be the menu |

### Reference

- https://github.com/material-components/material-components-web/tree/master/packages/mdc-menu
