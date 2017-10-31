## IconToggle

### Markup

```html
<m-icon-toggle v-model="iconToggle" accent icon="favorite" />
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
| icon | String | - | true | material icon name |
| disabled | Boolean | - | false | not toggleable icon |
| primary | Boolean | - | false | primary theme color |
| accent | Boolean | - | false | secondary theme color |
| labelOn | String | - | false | label when toggle is true |
| labelOff | String | - | false | label when toggle is false |

### Reference

- https://material.io/icons
- https://github.com/material-components/material-components-web/tree/master/packages/mdc-icon-toggle