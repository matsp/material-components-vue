## Radio

### Markup

```html
 <m-radio v-model="radioBox" />
```
### Script

```javascript
data() {
    return {
        radioBox: false
    }
}
```
### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| disabled | Boolean | - | false | disabled radio |

Non prop attributes are mapped to the inner input element.

### Reference

- https://github.com/material-components/material-components-web/tree/master/packages/mdc-radio
