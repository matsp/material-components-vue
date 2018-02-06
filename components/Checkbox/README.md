## Checkbox

### Markup

```html
<m-form-field>
    <m-checkbox id="checkbox" v-model="checkboxValue" indeterminate disabled/>
    <label for="checkbox">Checkbox</label>
</m-form-field>
<m-form-field alignEnd>
    <m-checkbox id="checkbox2" v-model="checkbox2Value"/>
    <label for="checkbox2">Checkbox</label>
</m-form-field>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| checked | Boolean | false | checkbox value |
| indeterminate | Boolean | false | not true not false |

Non prop attributes are mapped to the inner input element.

### Reference

- https://github.com/material-components/material-components-web/tree/master/packages/mdc-checkbox
