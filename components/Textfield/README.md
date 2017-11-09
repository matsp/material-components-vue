## Textfield

### Markup

```html
<m-textfield v-model="text" bottomLine>Textfield</m-textfield>
<m-textfield-multiline v-model="text">Textfield</m-textfield-multiline>
<m-textfield bottomLine required minlength=8 aria-controls="pw-validation">
    Password
</m-textfield>
<m-textfield-helptext id="pw-validation">
    Password must be at least 8 characters long.
</m-textfield-helptext>
```

### Script

```javascript
data() {
    return {
        text: ''
    }
}
```

### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| value | String | - | false | textfield value |
| disabled | Boolean | - | false |  whether the textfield should be disabled |
| upgraded | Boolean | - | false | whether the textfield should be upgraded when it already has a value (FOUC) |
| fullWidth | Boolean | - | false | expand the textfield to max width |
| box | Boolean | - | false | draws a box around the textfield |
| labelFloat | - | false | whether the label should float above the input field that already has a value (FOUC) |
| bottomLine | Boolean | - | false | draws the bottom line in primary theme color |

### Slots

| Slot | Prop dependencies | Description |
|------|-------------------|-------------|
| default | - | textfield label |

Non prop attributes are mapped to the inner input element.

## TextfieldMultiline

### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| value | String | - | false | multiline textfield value |
| disabled | Boolean | - | false |  whether the multiline textfield should be disabled |
| upgraded | Boolean | - | false | whether the multiline textfield should be upgraded when it already has a value (FOUC) |
| fullWidth | Boolean | - | false | expand the multiline textfield to max width |
| box | Boolean | - | false | draws a box around the multiline textfield |
| labelFloat | - | false | whether the label should float above the input field that already has a value (FOUC) |

### Slots

| Slot | Prop dependencies | Description |
|------|-------------------|-------------|
| default | - | multiline textfield label |

Non prop attributes are mapped to the inner textarea element.

## TextfieldHelptext

### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| persistent | Boolean | - | false | whether the helptext should be persistent |
| validationMsg | Boolean | - | whether the text should be used as validation message |

### Slots

| Slot | Prop dependencies | Description |
|------|-------------------|-------------|
| default | - | helptext text |

### Reference

- https://github.com/material-components/material-components-web/tree/master/packages/mdc-textfield
