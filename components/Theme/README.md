## Theme

### Markup

```html
<m-theme dark :customStyles="customStyle">
  themed content
</m-theme>
```

```javascript
const customStyle = {
  --mdc-theme-primary: '#4286f4'
}
```

### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| dark | Boolean | - | false | enables dark theme |
| customStyles | Object | - | false | customize theme variables |

### Slots

| Slot | Prop dependencies | Description |
|------|-------------------|-------------|
| default | - | themed content |

For a complete list of all CSS custom properties have a look at the [reference](https://github.com/material-components/material-components-web/tree/master/packages/mdc-theme#css-custom-properties).

### Reference

- https://github.com/material-components/material-components-web/tree/master/packages/mdc-theme
