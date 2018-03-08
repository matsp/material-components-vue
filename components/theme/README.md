## Theme

This component can be used for runtime theming and avoiding SASS if you don't need the flexibility.
If you want to create a static customized style than you should consider using SASS - working with
variables in SASS is easier and faster.

All content that will be rendered in a theme component will be styled with the given custom style.
This way it is possible to have several different themed components grouped together.

### Markup

```html
<m-theme :customStyle="customStyle">
  themed content
</m-theme>
```
### Script

```javascript
const customStyle = {
  --mdc-theme-primary: '#4286f4'
}
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| customStyles | Object | {} | customize theme variables |

### Slots

| Slot | Description |
|------|-------------|
| default | themed content |

For a complete list of all CSS custom properties have a look at the [reference](https://github.com/material-components/material-components-web/tree/master/packages/mdc-theme#css-custom-properties).

### Reference

- https://github.com/material-components/material-components-web/tree/master/packages/mdc-theme
