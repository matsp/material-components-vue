## Radio

### Markup

```html
 <m-radio name="group" value="option1" v-model="radioGroup" />
 <m-radio name="group" value="option2" v-model="radioGroup" />
 <m-radio name="group" value="option3" v-model="radioGroup" />
```
### Script

```javascript
data() {
    return {
        radioGroup: ''
    }
}
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| checked | Boolean | false | whether the radio is selected |
| disabled | Boolean | false | disabled radio |
| value | String | '' | value of radio (will be v-modeled) |
| name | String | '' | radio group name |
| js | Boolean | true | Whether or not to use an optional JavaScript component to enhance it with a ripple interaction effect |

Non prop attributes are mapped to the inner input element.

### Reference

- https://github.com/material-components/material-components-web/tree/master/packages/mdc-radio
