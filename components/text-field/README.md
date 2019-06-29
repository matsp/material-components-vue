## Textfield

### Markup

```html
<m-textfield v-model="text" id="textfield">
  <m-floating-label for="textfield">Textfield label</m-floating-label>
  <m-line-ripple slot="bottomLine"/>
</m-textfield>
<m-textfield
  outlined
  id="outlined">
  <m-floating-label for="outlined">Outlined</m-floating-label>
  <m-notched-outline />
</m-textfield>
<m-textfield v-model="pw" id="passwordfield" type="password" required minlength="8" aria-controls="pw-validation">
  <m-floating-label for="passwordfield">Password</m-floating-label>
  <m-line-ripple slot="bottomLine"/>
</m-textfield>
<m-textfield-helper-text id="pw-validation">
  Password must be at least 8 characters long.
</m-textfield-helper-text>

<m-textfield
  outlined
  id="outlined">
  <m-floating-label for="outlined">Outlined</m-floating-label>
  <m-notched-outline />
</m-textfield>
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
| outlined | Boolean | false | draws an outer line around input field (NotchedOutline component also needed)|
| dense | Boolean | false | whether the textfield should be dense |
| focused | Boolean | false | whether the textfield should be in focus |
| textarea | Boolean | false | whether the textfield should be a textarea |

### Slots

| Slot | Description |
|------|-------------|
| default | textfield label |
| leadingIcon | icon component |
| trailingIcon | icon component |
| bottomLine | line-ripple component |

Non prop attributes and events are mapped to the inner input element.

## TextfieldHelperText

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| persistent | Boolean | false | whether the helpertext should be persistent |
| validationMsg | Boolean | false | whether the text should be used as validation message |

### Slots

| Slot | Description |
|------|-------------|
| default | helpertext text |

### Reference

- https://github.com/material-components/material-components-web/tree/master/packages/mdc-textfield
