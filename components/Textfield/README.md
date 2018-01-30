## Textfield

### Markup

```html
<m-text-field v-model="text" bottomLine>
  Textfield
</m-text-field>
<m-text-field v-model="pw" type="password" bottom-line required minlength="8" aria-controls="pw-validation">
  Password
</m-text-field>
<m-text-field-helptext id="pw-validation">
  Password must be at least 8 characters long.
</m-text-field-helptext>
```

### Script

```javascript
data() {
    return {
        text: 'I am a text-field!'
    }
}
```

### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| value | String | '' | false | textfield value |
| disabled | Boolean | false | false |  whether the textfield should be disabled |
| upgraded | Boolean | false | false | whether the textfield should be upgraded when it already has a value (FOUC) |
| fullWidth | Boolean | false | false | expand the textfield to max width |
| box | Boolean | false | false | draws a box around the textfield |
| labelFloat | false | false | whether the label should float above the input field that already has a value (FOUC) |
| bottomLine | Boolean | false | false | draws the bottom line in primary theme color |
| outlined | Boolean | false | false | draws an outer line around input field |
| dense | Boolean | false | false | whether the textfield should be dense |
| focused | Boolean | false | false | whether the textfield should be in focus |
| textarea | Boolean | false | false | whether the textfield should be a textarea |
| shake | Boolean | false | false | whether the textfield label should shake |

### Slots

| Slot | Description |
|------|-------------|
| default | textfield label |
| leadingIcon | icon component |
| trailingIcon | icon component |

Non prop attributes are mapped to the inner input element.

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
