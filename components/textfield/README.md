## Textfield

### Markup

```html
<m-text-field v-model="text">
  Textfield
  <m-line-ripple slot="bottomLine"/>
</m-text-field>
<m-text-field v-model="pw" type="password" required minlength="8" aria-controls="pw-validation">
  Password
  <m-line-ripple slot="bottomLine"/>
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

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | String | '' | textfield value |
| disabled | Boolean | false |  whether the textfield should be disabled |
| upgraded | Boolean | false | whether the textfield should be upgraded when it already has a value (FOUC) |
| fullWidth | Boolean | false | expand the textfield to max width |
| box | Boolean | false | draws a box around the textfield |
| labelFloat | Boolean | false | whether the label should float above the input field that already has a value (FOUC) |
| outlined | Boolean | false | draws an outer line around input field |
| dense | Boolean | false | whether the textfield should be dense |
| focused | Boolean | false | whether the textfield should be in focus |
| textarea | Boolean | false | whether the textfield should be a textarea |
| shake | Boolean | false | whether the textfield label should shake |

### Slots

| Slot | Description |
|------|-------------|
| default | textfield label |
| leadingIcon | icon component |
| trailingIcon | icon component |
| bottomLine | line-ripple component |

Non prop attributes are mapped to the inner input element.

## TextfieldHelptext

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| persistent | Boolean | false | whether the helptext should be persistent |
| validationMsg | Boolean | false | whether the text should be used as validation message |

### Slots

| Slot | Description |
|------|-------------|
| default | helptext text |

### Reference

- https://github.com/material-components/material-components-web/tree/master/packages/mdc-textfield
