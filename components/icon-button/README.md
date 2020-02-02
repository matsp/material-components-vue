## IconButton

This component doesn't contain any icon CSS classes. You can use the slot variant with [Icon](../icon/README.md) or
e.g. SVGs. When you want to use toggling props you have to provide CSS for your Icons e.g. [Font Awesome](https://fontawesome.com/).

### Markup

#### Using SVG

```html
<m-icon-button>
  <svg>...</svg>
</m-icon-button>

<m-icon-button v-model="iconToggle">
  <svg slot="toggleOn">...</svg>
  <svg slot="toggleOff">...</svg>
</m-icon-button>
```

#### Using Material Icons

```html
<m-icon-button icon="favorite"></m-icon-button>

<m-icon-button v-model="iconToggle">
  <m-icon slot="toggleOn">favorite</m-icon>
  <m-icon slot="toggleOff">favorite_border</m-icon>
</m-icon-button>
```

#### Using Font Awesome

```html
<m-icon-button>
  <i class="fas fa-camera"></i>
</m-icon-button>

<m-icon-button v-model="iconToggle">
  <i class="fas fa-check-circle" slot="toggleOn"></i>
  <i class="far fa-check-circle" slot="toggleOff"></i>
</m-icon-button>
```

### Script

```javascript
data() {
    return {
        iconToggle: false
    }
}
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | Boolean | false | toggle state (could be v-modeled) |
| href | String | '' | render as `<a>` if presented. Not recommended to use in icon button toggle |
| icon | String | '' | Material Icon name. Similar to `icon` in `<m-icon>`. Omit this if you're using other icon libraries. |
| ripple | Boolean | true | Whether to use js ripple or not. Notice that the icon button toggle always has a ripple so this prop is always omitted if `toggleOn` and `toggleOff` slots are presented. |
| unbounded | Boolean | true | The `unbounded` prop of the ripple. |

Non prop attributes and events are mapped to the inner button element.

### Slots

| Slot | Description |
|------|-------------|
| default | button icon |
| toggleOn | toggle icon for 'on' state |
| toggleOff | toggle icon for 'off' state |

### Reference

- https://material.io/icons
- https://github.com/material-components/material-components-web/tree/master/packages/mdc-icon-button