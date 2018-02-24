## IconToggle

### Markup

```html
<m-icon-toggle v-model="iconToggle" iconOn="favorite" iconOff="favorite_border" />
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

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| iconOn | String | - | true | material icon name when toggle is true |
| iconOff | String | - | true | material icon name when toggle is false |
| disabled | Boolean | - | false | not toggleable icon |

### Reference

- https://material.io/icons
- https://github.com/material-components/material-components-web/tree/master/packages/mdc-icon-toggle