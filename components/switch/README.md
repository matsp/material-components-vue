## Switch

### Markup

```html
<m-switch v-model="switchValue" />
```

### Script

```javascript
data() {
    return {
        switchValue: false
    }
}
```

### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| checked | Boolean | - | false | switch state, can be `v-model` |
| disabled | Boolean | - | false | whether the switch should be disabled |

Non prop attributes are mapped to the inner input element.

### Reference

- https://github.com/material-components/material-components-web/tree/master/packages/mdc-switch
