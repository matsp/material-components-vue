## Text-field

### Basic Usage

```html
<m-text-field v-model="text" id="my-text-field">
  <m-floating-label for="my-text-field">Hint text</m-floating-label>
  <m-line-ripple slot="bottomLine"/>
</m-text-field>
```

### Full Width

```html
<m-text-field v-model="text" id="my-text-field" full-width  aria-label="Full-Width Text Field">
</m-text-field>
```

### Textarea

```html
<m-text-field v-model="text" id="my-text-field" textarea>
  <m-floating-label for="my-text-field">Textarea label</m-floating-label>
</m-text-field>
```

### Outlined

```html
<m-text-field v-model="text" id="my-text-field" outlined>
  <m-floating-label for="my-text-field">Textarea label</m-floating-label>
</m-text-field>
```

### Disabled

```html
<m-text-field v-model="text" id="my-text-field" disabled>
  <m-floating-label for="my-text-field">Hint text</m-floating-label>
  <m-line-ripple slot="bottomLine"/>
</m-text-field>
```

### Text Field without label

#### Filled

```html
<m-text-field v-model="text" id="my-text-field" aria-label="Label">
  <m-line-ripple slot="bottomLine"/>
</m-text-field>
```

#### Outlined

```html
<m-text-field v-model="text" id="my-text-field" aria-label="Label" outlined>
  <m-line-ripple slot="bottomLine"/>
</m-text-field>
```

#### Textarea

```html
<m-text-field v-model="text" id="my-text-field" aria-label="Label" textarea>
  <m-line-ripple slot="bottomLine"/>
</m-text-field>
```

### Text Field with Helper Text

```html
<m-text-field v-model="text" id="my-text-field">
  <m-floating-label for="my-text-field">Hint text</m-floating-label>
  <m-line-ripple slot="bottomLine"/>
</m-text-field>
<m-text-field-helper-line>
  <m-text-field-helper-text>helper text</m-text-field-helper-text>
</m-text-field-helper-line>
```

### Text Field with Character Counter

```html
<m-text-field v-model="text" id="my-text-field" maxlength="10">
  <m-floating-label for="my-text-field">Hint text</m-floating-label>
  <m-line-ripple slot="bottomLine"/>
</m-text-field>
<m-text-field-helper-line>
  <m-text-field-character-counter></m-text-field-character-counter>
</m-text-field-helper-line>
```

### Multi-line Text Field (Textarea) with Character Counter

```html
<m-text-field v-model="text" id="my-text-field" maxlength="140">
  <m-text-field-character-counter slot="characterCounter"></m-text-field-character-counter>
  <m-floating-label for="my-text-field">Hint text</m-floating-label>
  <m-line-ripple slot="bottomLine"/>
</m-text-field>
```

### Text Field with Leading and Trailing Icons

```html
<m-text-field v-model="text" id="my-text-field">
  <m-text-field-icon icon="favorite" slot="leadingIcon" />
  <m-floating-label for="my-text-field">Hint text</m-floating-label>
  <m-line-ripple slot="bottomLine"/>
  <m-text-field-icon icon="favorite" slot="trailingIcon" />
</m-text-field>
```

### Pre-filled

```html
<m-text-field v-model="text" id="my-text-field">
  <m-floating-label for="my-text-field" float-above>Hint text</m-floating-label>
  <m-line-ripple slot="bottomLine"/>
</m-text-field>
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
| value | [String, Number] | '' | text field value, can be `v-model` |
| disabled | Boolean | false |  whether the text field should be disabled |
| fullWidth | Boolean | false | Styles the text field as a full width text field. |
| outlined | Boolean | false | Styles the text field as an outlined text field. |
| dense | Boolean | false | Styles the text field as a dense text field, will be removed in an upcoming release |
| focused | Boolean | false | Styles the text field as a text field in focus. |
| textarea | Boolean | false | Indicates the text field is a `<textarea>`. |
| useNativeValidation | Boolean | true | Sets whether to check native HTML validity state (true, default) or custom validity state when updating styles (false). |
| valid | Boolean | true | Sets custom validity and updates styles accordingly. Note that native validation will still be honored subsequently unless useNativeValidation is also false. |

### Slots

| Slot | Description |
|------|-------------|
| default | text field label |
| leadingIcon | icon component |
| trailingIcon | icon component |
| bottomLine | line-ripple component |
| characterCounter | character counter component, only available in textarea |

Non prop attributes and events are mapped to the inner input element.

## Text Field Helper Text

> NOTE: Place this inside `<m-text-filed-helper-line>` which is an immediate sibling of `<m-text-field>`.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| persistent | Boolean | false | Makes the helper text permanently visible. |
| validationMsg | Boolean | false | Indicates the helper text is a validation message. |

### Slots

| Slot | Description |
|------|-------------|
| default | helper text text |

## Text Field Icon

Icons describe the type of input a text field requires. They can also be interaction targets.

To use other icon library

```html
<m-text-field-icon class="some-other-icon-library-class"></m-text-field-icon>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| clickable | Boolean | true | whether this is a clickable icon |
| icon | String | '' | material icon name |

### Slots

| Slot | Description |
|------|-------------|
| default | icon name if you are using other icon library than 'material-icons' |

## Text Field Character Counter

Character counter is used if there is a character limit. It displays the ratio of characters used and the total character limit.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| currentLength | Number | 0 | characters used |
| maxLength | Number | 0 | total character limit |

### Reference

- https://github.com/material-components/material-components-web/tree/master/packages/mdc-textfield
