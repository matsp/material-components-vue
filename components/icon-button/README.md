## IconButton

This component doesn't contain any icon CSS classes. You can use the slot variant with [Icon](../icon/README.md) or
e.g. SVGs. When you want to use toggling props you have to provide CSS for your Icons e.g. [Font Awesome](https://fontawesome.com/).

### Markup

```html
<m-icon-button>
  <svg>...</svg>
</m-icon-button>

<m-icon-button v-model="iconToggle">
  <svg slot="toggleOn">...</svg>
  <svg slot="toggleOff">...</svg>
</m-icon-button>
```

### Script

```javascript
data() {
    return {
        iconButton: false
    }
}
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| toggleOnContent | String | ' ' | toggle icon name for 'on' state |
| toggleOnLabel | String | ' ' | toggle icon label for 'on' state |
| toggleOnClass | String | ' ' | toggle icon CSS class for 'on' state |
| toggleOffContent | String | ' ' | toggle icon name for 'off' state |
| toggleOffLabel | String | ' ' | toggle icon label for 'off' state |
| toggleOffClass | String | ' ' | toggle icon CSS class for 'off' state |
| value | Boolean | false | toggle state (could be v-modeled) |

Non prop attributes and events are mapped to the inner button element.

### Slots

| Slot | Description |
|------|-------------|
| default | button icon (will overrule all other slots if set) |
| toggleOn | toggle icon for 'on' state |
| toggleOff | toggle icon for 'off' state |

### Reference

- https://material.io/icons
- https://github.com/material-components/material-components-web/tree/master/packages/mdc-icon-button